import { baseServerURL, is2xx, onNot2xx } from '.';

export interface AuthenticateResult {
    sessionToken: string;
}

export async function authenticate(idToken: string, origin: string): Promise<AuthenticateResult> {
    const response = await fetch(`${baseServerURL}/auth/${origin}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            authenticationRequestData: {
                idToken,
            },
        }),
    });

    if (is2xx(response)) {
        return await response.json();
    }

    await onNot2xx(response);
}
