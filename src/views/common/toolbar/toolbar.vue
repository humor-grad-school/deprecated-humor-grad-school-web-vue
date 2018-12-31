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
    height: 50px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    z-index: 999;
    box-sizing: border-box;
}
</style>
