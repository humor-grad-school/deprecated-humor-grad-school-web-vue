import Vue from 'vue';
import { initFacebook } from '@/utils/initFacebook';
import { authenticate } from '@/api/authenticate';
import { ErrorCode } from '@/api/types/generated/ErrorCode';

let facebookLoginHandler: (accessToken: string) => void;

(window as any).onFbLogin = (data) => {
    if (!facebookLoginHandler) {
        console.log('facebookLoginHandler is undefined');
        return;
    }
    if (data.status !== 'connected') {
        console.log(`data.status : ${data.status}`);
        return;
    }

    facebookLoginHandler(data.authResponse.accessToken);
};

export default Vue.extend({
    name: 'fb-sign-in-button',
    props: {
    },
    data() {
        return {
            origin: 'facebook',
        };
    },
    methods: {
        async authenticateWithHGS(idToken: string, origin: string) {
            try {
                const {
                    isSuccessful,
                    errorCode,
                    data,
                } = await authenticate({
                    origin,
                }, {
                    authenticationRequestData: {
                        idToken,
                    }
                });

                if (!isSuccessful) {
                    switch (errorCode) {
                        case ErrorCode.AuthenticateErrorCode.NoUser:
                            this.$router.push({
                                name: 'signup',
                                params: {
                                        origin,
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
                            break;
                    }
                    console.error(errorCode);
                    throw new Error(errorCode);
                }

                const { sessionToken } = data;
                // Successful login
                // save sessionToken and that's all
                console.log(sessionToken);
                this.$router.push({ name: 'home' });
            } catch (statusCode) {
                // only network error.
                alert(statusCode);
            }
        },
    },
    async mounted() {
        await initFacebook();
        facebookLoginHandler = (accessToken) => {
            console.log(accessToken);
            this.authenticateWithHGS(accessToken, this.origin);
        };
    },
});