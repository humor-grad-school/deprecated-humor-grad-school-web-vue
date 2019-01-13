<template>
    <div class="fb-sign-in-button">
        <div
            class="fb-login-button"
            data-max-rows="1"
            data-size="large"
            data-button-type="continue_with"
            data-show-faces="false"
            data-auto-logout-link="false"
            data-use-continue-as="false"
            data-onlogin="onFbLogin"
        ></div>
    </div>
</template>

<script lang="ts" src="./fb-sign-in-button.ts">
</script>

<style scoped>

</style>
