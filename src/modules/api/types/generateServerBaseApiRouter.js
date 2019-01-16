const fs = require('fs-extra');
const yaml = require('js-yaml');
const toCamelcase = require('./utils/toCamelcase');

const definitionFile = fs.readFileSync('./apiDefinitions.yml', {
  encoding: 'utf-8',
});

const doc = yaml.safeLoad(definitionFile);

function makeFirstCharacterUppercase(string) {
  return `${string.substring(0, 1)}${string.substring(1)}`;
}

let result = `
import Router from 'koa-router';
import { ResponseType } from '../ResponseType';
import { ErrorCode } from '../ErrorCode';
import { ParamMap } from '../ParamMap';
import { RequestBodyType } from '../RequestBodyType';

export interface Session {
  userId: number;
}

export interface HgsRouterContext {
  session: Session;
  ip: string;
}

export type HgsRouterHandler = (
  paramMap: {[key: string]: any},
  body: {[key: string]: any},
  context: HgsRouterContext,
) => Promise<ResponseType.BaseResponseType>;

export async function passAuthorizationMiddleware(ctx, next) {
  return await next();
}

interface HandlersInfo {
  handler: HgsRouterHandler;
  method: string;
  url: string;
  passAuth: boolean;
}

abstract class HgsRouter {
  protected readonly handlersInfos: HandlersInfo[];
  getKoaRouter(): Router {
    const router = new Router();
    this.handlersInfos.forEach(info => {
      const {
        handler,
        method,
        url,
        passAuth,
      } = info;
      router[method.toLowerCase()](url, passAuth ? passAuthorizationMiddleware : (_, next) => next(), async (ctx, next) => {
        try {
          const response = await handler(ctx.params, ctx.request.body, ctx);
          ctx.response.body = response;
        } catch(error) {
          // TODO
          ctx.response.body = {
            isSuccessful: false,
            errorCode: ErrorCode.DefaultErrorCode.InternalServerError,
          };
        }
      });
    });

    return router;
  }
}
`;

function convertTypeToString(type, space) {
  const lines = JSON.stringify(type, null, 2)
    .replace(/"/g, '')
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

Object.entries(doc).map(([serviceName, functionMap]) => {
  result += `
export abstract class Base${serviceName}ApiRouter extends HgsRouter {
  protected readonly handlersInfos: HandlersInfo[] = [`
    result += Object.entries(functionMap).map(([functionName, functionContent]) => {
      const {
        url,
        method,
        passAuth,
      } = functionContent;
      return `
    {
      handler: this.${toCamelcase(functionName)},
      method: '${method}',
      url: '${url}',
      passAuth: ${passAuth || false},
    },`;
    }).join('\n');
    result += `
  ];
`
  Object.entries(functionMap).forEach(([functionName, functionContent]) => {
    const functionNameInPascalCase = makeFirstCharacterUppercase(functionName);
    const {
      errorCodes,
      url,
      requestBodyType,
      responseDataType,
    } = functionContent;
    // TODO : What if function has no errorCode?
    result += `
  protected abstract async ${toCamelcase(functionName)}(
    paramMap: ParamMap.${functionNameInPascalCase}ParamMap,
    body: RequestBodyType.${functionNameInPascalCase}RequestBodyType,
    context: HgsRouterContext,
  ): Promise<ResponseType.${functionNameInPascalCase}ResponseType>;
`;
  });
  result += '}\n'
});

async function save() {
  await fs.mkdirp('./generated/server');
  await fs.writeFile('./generated/server/ServerBaseApiRouter.ts', result);
}

save();
