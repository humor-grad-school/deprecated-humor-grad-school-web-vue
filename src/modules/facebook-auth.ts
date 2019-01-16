import { loadExternalScriptAsync } from '@/utils';

let isAlreadyInited = false;

export async function initFacebook() {
    if (isAlreadyInited) {
        return;
    }
    await loadExternalScriptAsync('facebook-jssdk',
        'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v3.2&appId=1981226042178093&autoLogAppEvents=1');
    FB.init({
        appId: '1981226042178093',
        xfbml: true,
        version: 'v3.2',
    });
    FB.AppEvents.logPageView();

    isAlreadyInited = true;
}
