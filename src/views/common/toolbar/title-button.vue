<template>
    <div class="title-button">
        <div class="menu-btn m-show">
            <button type="button">
                <i class="material-icons md-36">menu</i>
            </button>
        </div>
        <router-link to="/" class="title">
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
.title-button {
    height: 64px;
    float: left;
}
.title {
    text-decoration: none;
}
h1 {
    margin: 0;
    letter-spacing: 4px;
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
    line-height: 64px;
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
</style>

