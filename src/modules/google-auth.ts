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

    await new Promise(async (resolve) => {
        gapi.auth2.init({
            client_id: '74489406824-dlmplsl075187spamd9a4m6g90ah56so.apps.googleusercontent.com',
        }).then(async (googleAuth) => { // this is not promise.
            await googleAuth.signOut();
            resolve();
        });
    });

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

export async function signOutGoogle() {
    const instance = gapi.auth2.getAuthInstance();
    const isSignedIn = instance && instance.isSignedIn.get();
    if (isSignedIn) {
        await instance.signOut();
    }
}
