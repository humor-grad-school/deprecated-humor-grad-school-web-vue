import loadExternalScriptAsync from './loadExternalScriptAsync';

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

    console.log('google init finished');
    isAlreadyInited = true;
}
