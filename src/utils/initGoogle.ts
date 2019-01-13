import loadExternalScriptAsync from './loadExternalScriptAsync';

let isAlreadyInited = false;

export async function initGoogle() {
    if (isAlreadyInited) {
        return;
    }
    await loadExternalScriptAsync('google-jssdk',
        'https://apis.google.com/js/platform.js?hl=ko');
    console.log('google init finished');
    isAlreadyInited = true;
}
