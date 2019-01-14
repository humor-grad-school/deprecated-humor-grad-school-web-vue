import Vue from 'vue';
import { authenticate } from '@/api/authenticate';
import { signUp } from '@/api/signUp';
import { ErrorCode } from '@/api/types/generated/ErrorCode';

export default Vue.extend({
    name: 'sign-up',
    components: {

    },
    data() {
        return {
            origin: '',
            idToken: '',
            username: '',
        };
    },
    beforeRouteEnter(to, _from, next) {
        next((vm: any) => {
            vm.getParams(to);
        });
    },
    methods: {
        getParams(route) {
            const {
                origin,
                idToken,
            } = route.params;
            this.origin = origin;
            this.idToken = idToken;
        },
        async signUp() {
            console.log(this.origin);
            const response = await signUp({}, {
                authenticationRequestData: {
                    idToken: this.idToken,
                },
                origin: this.origin,
                username: this.username,
            });
            if (response.isSuccessful) {
                const {
                    data,
                    isSuccessful,
                    errorCode,
                    } = await authenticate({
                        origin: this.origin,
                    }, {
                        authenticationRequestData: {
                            idToken: this.idToken,
                        },
                    });
                if (isSuccessful) {
                    // TODO : save this session Token please~
                    console.log(data.sessionToken);

                    this.$router.push({
                        name: 'home',
                    });
                    return;
                }
                // fail authenticate with new id!?!?!?!?
                console.log(errorCode);

                return;
            }

            switch (response.errorCode) {
                case ErrorCode.SignUpErrorCode.AuthenticationFailed:
                    // maybe user's 3rd party token has been expired.
                    break;
                case ErrorCode.SignUpErrorCode.CreateUserFailed:
                    // may wrong username?
                    break;
                case ErrorCode.SignUpErrorCode.NoIdentity:
                    // maybe user didn't sign in before. make him sign in first.
                    break;
                case ErrorCode.SignUpErrorCode.WrongOrigin:
                    // check origin is facebook, google, or something ok? ok.
                    break;

                default:
                    break;
            }

        }
    },
});
