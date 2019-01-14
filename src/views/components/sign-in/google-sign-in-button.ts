import Vue from 'vue';
import { initGoogle } from '@/utils/initGoogle';
import { authenticate } from '@/api/authenticate';
import { ErrorCode } from '@/api/types/generated/ErrorCode';

export default Vue.extend({
    name: 'fb-sign-in-button',
    props: {

    },
    data() {
        return {
            googleLoginButtonId: 'google-button',
            origin: 'google',
        };
    },
    async mounted() {
        await initGoogle();

        // this is test code. user who already signed in cannot see this buton!
        const instance = gapi.auth2.getAuthInstance();
        if (instance && instance.isSignedIn) {
            await instance.signOut();
        }
        /////////////////////////////////////////////////////////////////////////

        gapi.signin2.render(this.googleLoginButtonId, {
            scope: 'profile email',
            width: 240,
            height: 50,
            longtitle: true,
            theme: 'dark',
            onsuccess: this.onGoogleLoginSuccess.bind(this),
            onfailure: this.onGoogleLoginFailed.bind(this),
        });
    },
    methods: {
        async onGoogleLoginSuccess(loginResult) {
            const { id_token: idToken } = loginResult.getAuthResponse();
            try {
                const {
                    isSuccessful,
                    errorCode,
                    data,
                } = await authenticate({
                    origin: this.origin,
                }, {
                    authenticationRequestData: {
                        idToken,
                    }
                });

                if (!isSuccessful) {
                    switch (errorCode) {
                        case ErrorCode.AuthenticateErrorCode.NoUser:
                            console.log(this.origin);
                            this.$router.push({
                                name: 'signup',
                                params: {
                                        origin: this.origin,
                                        idToken,
                                    },
                                });
                            break;
                        case ErrorCode.AuthenticateErrorCode.AuthenticationFailed:
                            // what!?
                            break;
                        case ErrorCode.AuthenticateErrorCode.WrongIdentityType:
                            // check origin.
                            break;
                        default:
                            console.error(errorCode);
                            break;
                    }
                    return;
                }

                const { sessionToken } = data;
                // Successful login
                // save sessionToken and that's all
                console.log(sessionToken);
                this.$router.push({ name: 'home' });
            } catch (statusCode) {
                // only network error.
                console.error(statusCode);
            }
        },
        onGoogleLoginFailed() {
            console.log('ah failed');
        },
    }
});