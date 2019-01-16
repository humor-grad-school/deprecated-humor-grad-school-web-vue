import { loadExternalScriptAsync } from '@/utils';

let isAlreadyInited = false;

export async function initGoogle() {
    if (isAlreadyInited) {
        return;
    }

    await loadExternalScriptAsync('google-jssdk',
        'https://apis.google.com/js/platform.js?hl=ko');

    await new Promise((resolve) => {
        gapi.load('auth2', () => {
            resolve();
        });
    });

    isAlreadyInited = true;
}
