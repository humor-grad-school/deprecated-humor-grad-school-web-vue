// export const baseServerURL = 'https://83865vozvg.execute-api.ap-northeast-2.amazonaws.com/dev';
export const baseServerURL = 'http://localhost:8080';

export function is2xx(response: Response): boolean {
    return response.status >= 200 && response.status < 300;
}

export async function onNot2xx(response: Response) {
    let errorCode;
    try {
        const json = await response.json();
        errorCode = json.errorCode;
    } catch (err) {
        throw response.status;
    }
    throw errorCode;
}
