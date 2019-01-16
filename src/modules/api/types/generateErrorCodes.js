const fs = require('fs');
const yaml = require('js-yaml');
const toPascalcase = require('./utils/toPascalcase');

const definitionFile = fs.readFileSync('./apiDefinitions.yml', {
  encoding: 'utf-8',
});

const doc = yaml.safeLoad(definitionFile);

let result = `
export namespace ErrorCode {
  export enum DefaultErrorCode {
    InternalServerError = 'InternalServerError',
  }
`;

const enums = Object.entries(doc).map(([serviceName, funcitonMap]) => {
  return Object.entries(funcitonMap).map(([functionName, functionContent]) => {
    const functionNameInPascalCase = toPascalcase(functionName);
    const {
      errorCodes,
    } = functionContent;
    // TODO : What if function has no errorCode?
    if (!errorCodes) {
      return undefined;
    }
    return `  export enum ${functionNameInPascalCase}ErrorCode {
${errorCodes.map(errorCode => `    ${toPascalcase(errorCode)} = '${toPascalcase(errorCode)}',`).join('\n')}
  };`;
  })
})
.filter((text) => text)
.reduce((acc, val) => acc.concat(val), [])

result += enums.join('\n');

result += `}`;


fs.writeFileSync('./generated/ErrorCode.ts', result);
