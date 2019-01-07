<template>
    <header>
        <div class="title-wrap">
            <title-button/>
            <auth-button/>
        </div>
        <menu-bar/>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import TitleButton from './title-button.vue';
import AuthButton from './auth-button.vue';
import MenuBar from './menu-bar.vue';

export default Vue.extend({
    components: { TitleButton, AuthButton, MenuBar }
});
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    box-sizing: border-box;
    background-color: #039BE5;
    color: #ffffff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}
.title-wrap {
    max-width: 1080px;
    height: 64px;
    margin: 0 auto;
}
</style>
