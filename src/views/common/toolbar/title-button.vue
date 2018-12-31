<template>
    <div class="menu-wrap">
        <div class="menu-btn m-show">
            <button type="button">
                <i class="material-icons md-36">menu</i>
            </button>
        </div>
        <router-link to="/">
            <h1>웃긴대학원</h1>
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    
});
</script>

<style scoped>
.menu-wrap {
    margin: 0 auto;
    max-width: 1080px;
}
.menu-btn {
    width: 50px;
    height: 100%;
    float: left;
    padding-left: 10px;
    padding-top: 10px;
    text-align: center;
    box-sizing: border-box;
}
.menu-btn button {
    width: 36px;
    height: 36px;
}
h1 {
    float: left;
    font-size: 18px;
    margin: 0;
    padding-top: 17px;
    padding-left: 8px;
    letter-spacing: 3px;
}
</style>

