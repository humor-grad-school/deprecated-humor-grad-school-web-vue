<template>
    <div class="sign-in">
        <fb-sign-in-button />
        <google-sign-in-button />
        FB button
        Goggle
        Kakao
        <!-- Naver << not yet -->
        Email
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FbSignInButton from '@/views/components/sign-in/fb-sign-in-button.vue';
import GoogleSignInButton from '@/views/components/sign-in/google-sign-in-button.vue';

export default Vue.extend({
    name: 'sign-in',
    components: {
        FbSignInButton,
        GoogleSignInButton,
    }
});
</script>
