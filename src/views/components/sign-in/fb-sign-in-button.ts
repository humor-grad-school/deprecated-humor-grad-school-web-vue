import Vue from 'vue';
import { initFacebook } from '@/utils/initFacebook';
import { authenticate } from '@/api/authenticate';

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
                const { sessionToken } = await authenticate(idToken, this.origin);
                // Successful login
                // save sessionToken and that's all
                console.log(sessionToken);
            } catch (errorCodeOrStatus) {
                console.log(errorCodeOrStatus);
                switch (errorCodeOrStatus) {
                    case 'WrongIdentityType': {
                        // check your origin ('facebook', 'google', etc);
                    }
                    case 'NoUser': {
                        // sign up please
                        this.$router.push({
                            name: 'signup',
                            params: {
                                    origin,
                                    idToken,
                                },
                            });
                        return;
                    }
                    case 'AuthenticationFailed': {
                        // reject!
                    }
                    default: {
                        // network error
                    }
                }
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