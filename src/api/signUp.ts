import { baseServerURL, is2xx, onNot2xx } from '.';

export async function signUp(username: string, origin: string, idToken: string) {
    const response = await fetch(`${baseServerURL}/user`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            username,
            origin,
            authenticationRequestData: {
                idToken,
            },
        }),
    });
    if (is2xx(response)) {
        return;
    }
    await onNot2xx(response);
}
