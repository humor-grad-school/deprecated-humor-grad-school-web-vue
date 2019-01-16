import { baseServerURL, is2xx } from '.';
import { RequestBodyType } from './types/generated/RequestBodyType';
import { ParamMap } from './types/generated/ParamMap';
import { ResponseType } from './types/generated/ResponseType';

export async function authenticate(
    params: ParamMap.AuthenticateParamMap,
    body: RequestBodyType.AuthenticateRequestBodyType,
): Promise<ResponseType.AuthenticateResponseType> {
    // TODO use url from ApiDefinition
    const response = await fetch(`${baseServerURL}/auth/${params.origin}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!is2xx(response)) {
        throw new Error(response.status.toString());
    }
    return await response.json();
}
