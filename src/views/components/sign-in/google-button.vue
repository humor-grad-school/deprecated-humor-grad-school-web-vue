<template>
    <div class="google-button">
        <div id="google-log-in"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ErrorCode } from '@/api/types/generated/ErrorCode';

export default Vue.extend({
    mounted() {
        this.$store.dispatch('auth/initGoogleAuth', {
            provider: 'google',
            success: this.onSuccess.bind(this),
            error: this.onError.bind(this),
        });
    },
    methods: {
        onSuccess(res) {
            if (res.isSuccessful) {
                // TODO: go to from url
                this.$router.push({ name: 'home' });
                return;
            }
            
            // on fail
            switch (res.errorCode) {
                case ErrorCode.AuthenticateErrorCode.NoUser:
                    this.$router.push({
                        name: 'signup',
                        // TODO: pass idToken, origin(provider)
                    });
                    break;
                case ErrorCode.AuthenticateErrorCode.AuthenticationFailed:
                case ErrorCode.AuthenticateErrorCode.WrongIdentityType:
                    this.$store.dispatch('ui/snackbar/show', { msg: '비정상적인 인증 입니다.', style: 'error' });
                    break;
                default:
                    console.error(res.errorCode);
                    break;
            }
        },
        onError(errorCode) {
            console.error(errorCode);
        }
    }
});
</script>

