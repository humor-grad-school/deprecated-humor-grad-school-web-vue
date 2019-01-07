<template>
    <div class="account">
        <sign-in-form></sign-in-form>
        <sign-up-form></sign-up-form>
        <social-sign-in></social-sign-in>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SignInForm from '@/views/components/account/sign-in-form.vue';
import SignUpForm from '@/views/components/account/sign-up-form.vue';
import SocialSignIn from '@/views/components/account/social-sign-in.vue';

export default Vue.extend({
    name: 'account',
    components: {
        SignInForm, SignUpForm, SocialSignIn
    }
});
</script>
