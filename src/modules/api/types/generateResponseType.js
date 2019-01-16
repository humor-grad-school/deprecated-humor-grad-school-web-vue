const fs = require('fs');
const yaml = require('js-yaml');

const definitionFile = fs.readFileSync('./apiDefinitions.yml', {
  encoding: 'utf-8',
});

const doc = yaml.safeLoad(definitionFile);

function makeFirstCharacterUppercase(string) {
  return `${string.substring(0, 1)}${string.substring(1)}`;
}

let result = `
import { ErrorCode } from './ErrorCode';
export namespace ResponseType {
  export interface BaseResponseType {
    isSuccessful: boolean;
    errorCode?: string;
  }
  export interface DefaultResponseType extends BaseResponseType {
    isSuccessful: boolean;
    errorCode?: ErrorCode.DefaultErrorCode;
  }
`;

function convertTypeToString(type, space) {
  const lines =  JSON.stringify(type, null, 2)
    .replace(/"|'|,/g, '')
    .split('\n');

  lines.pop();
  lines.shift();

  return lines.map((line) => {
      line = `${' '.repeat(space)}${line}`;
      const endOfLine = line.substring(line.length - 2);
      if (endOfLine.match(/[a-z|A-Z]/)) {
        return `${line};`;
      }
      return line;
    })
    .join('\n');
}

Object.entries(doc).map(([serviceName, funcitonMap]) => {
  Object.entries(funcitonMap).forEach(([functionName, functionContent]) => {
    const functionNameInPascalCase = makeFirstCharacterUppercase(functionName);
    const {
      errorCodes,
      url,
      requestBodyType,
      responseDataType,
    } = functionContent;
    // TODO : What if function has no errorCode?
    result += `
  export interface ${functionNameInPascalCase}ResponseType extends BaseResponseType {
    isSuccessful: boolean;
    ${errorCodes
      ? `errorCode?: ErrorCode.${functionNameInPascalCase}ErrorCode | ErrorCode.DefaultErrorCode;`
      : 'errorCode?: ErrorCode.DefaultErrorCode;'}
    data?: {
${responseDataType ? convertTypeToString(responseDataType, 4) : ''}
    }
  }
`;
  })
});

result += '}'

fs.writeFileSync('./generated/ResponseType.ts', result);
