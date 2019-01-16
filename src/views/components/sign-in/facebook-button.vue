<template>
    <div class="facebook-button">
        <button type="button" @click="onClickLogin">FACEBOOK LOGIN</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ErrorCode } from '@/api/types/generated/ErrorCode';

export default Vue.extend({
    async mounted() {
        this.$store.dispatch('auth/initFacebookAuth');
    },
    methods: {
        onClickLogin() {
            this.$store.dispatch('auth/loginFacebookAuth', {
                provider: 'facebook',
                success: this.onSuccess.bind(this),
                error: this.onError.bind(this),
            });
        },
        onSuccess() {
            const from = this.$route.query.from || '/';
            this.$router.push({ path: from });
        },
        onError(errorCode) {
            switch (errorCode) {
                case ErrorCode.AuthenticateErrorCode.NoUser:
                    const from = this.$route.query.from || '/';
                    this.$router.push({ name: 'signup', query: { from } });
                    break;
                case ErrorCode.AuthenticateErrorCode.AuthenticationFailed:
                case ErrorCode.AuthenticateErrorCode.WrongIdentityType:
                    this.$store.dispatch('ui/snackbar/show', { msg: '비정상적인 인증 입니다.', style: 'error' });
                    break;
                default:
                    console.error(errorCode);
                    break;
            }
        },
    }    
});
</script>
