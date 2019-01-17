<template>
    <div class="sign-in">
        <social-sign-in />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SocialSignIn from '@/views/components/sign-in/social-sign-in.vue';

export default Vue.extend({
    name: 'sign-in',
    components: { SocialSignIn },
})
</script>
