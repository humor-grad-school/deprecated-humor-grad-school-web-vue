import { loadExternalScriptAsync } from '@/utils';

let isInitiated = false;

export async function initGoogle({ success, error }) {
    if (isInitiated === false) {
        await loadExternalScriptAsync('google-jssdk',
            'https://apis.google.com/js/platform.js?hl=ko');

        await new Promise((resolve) => {
            gapi.load('auth2', () => {
                resolve();
            });
        });
    }

    gapi.signin2.render('google-log-in', {
        scope: 'profile email',
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: success,
        onfailure: error,
    });

    isInitiated = true;
}

export function signOut() {
    const instance = gapi.auth2.getAuthInstance();
    if (instance && instance.isSignedIn) {
        instance.signOut();
    }
}
