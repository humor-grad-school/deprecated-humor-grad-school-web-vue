import { loadExternalScriptAsync } from '@/utils';

let isInitiated = false;

export async function initFacebook() {
    if (isInitiated === false) {
        await loadExternalScriptAsync('facebook-jssdk',
            'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v3.2&appId=1981226042178093&autoLogAppEvents=1');
    }
    
    FB.getLoginStatus(async (res) => {
        if (res.status === 'connected') {
            await signOutFacebook();
        }

        FB.init({
            appId: '1981226042178093',
            xfbml: true,
            version: 'v3.2',
        });
    
        FB.AppEvents.logPageView();
    
        isInitiated = true;
    });
}

export function loginFacebook({ success }) {
    FB.login((res) => {
        if (res.status === 'connected' && res.authResponse) {
            success(res.authResponse);
        }
    }, {});
}

export function signOutFacebook() {
    return new Promise((resolve) => {
        FB.logout(() => {
            resolve();
        });
    });
}