<template>
    <div class="social-sign-in">
        <facebook-button />
        <google-button />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FacebookButton from './facebook-button.vue';
import GoogleButton from './google-button.vue';

export default Vue.extend({
    components: {
        FacebookButton,
        GoogleButton,
    }
});
</script>
