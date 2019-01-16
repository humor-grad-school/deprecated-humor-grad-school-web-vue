<template>
    <div class="sign-in">
        <facebook-button />
        <google-button />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FacebookButton from '@/views/components/sign-in/facebook-button.vue';
import GoogleButton from '@/views/components/sign-in/google-button.vue';

export default Vue.extend({
    name: 'sign-in',
    components: {
        FacebookButton,
        GoogleButton,
    }
});
</script>
