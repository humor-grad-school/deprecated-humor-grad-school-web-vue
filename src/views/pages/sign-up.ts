import Vue from 'vue';
import { ErrorCode } from '@/api/types/generated/ErrorCode';

export default Vue.extend({
    name: 'sign-up',
    data() {
        return {
            username: ''
        };
    },
    methods: {
        signUp() {
            this.$store.dispatch('auth/signUp', {
                username: this.username,
                success: this.onSuccess.bind(this),
                error: this.onError.bind(this),
            });
        },
        onSuccess() {
            const from = this.$route.query.from || '/';
            this.$router.push({ path: from });
        },
        onError(errorCode) {
            console.log(errorCode);
            switch (errorCode) {
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
        },
    },
});
