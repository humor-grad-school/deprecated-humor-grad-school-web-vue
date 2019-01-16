<template>
    <div class="menu-bar" :class="{ menuOn: isMenuOn }">
        <ul class="menu-list">
            <li>
                <router-link to="/board/best" class="menu-item">웃긴 자료</router-link>
            </li>
            <li>
                <router-link to="/board/humor" class="menu-item">대기 자료</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        isMenuOn() {
            return this.$store.getters['ui/menu/menuOn'];
        }
    }
});
</script>

<style scoped>
.menu-bar {
    background-color: #F2F4F7;
    height: 40px;
}
.menu-list {
    max-width: 1080px;
    margin: 0 auto;
}
.menu-list li {
    height: 100%;
    float: left;
    margin-right: 16px;
}
.menu-item {
    line-height: 40px;
}
.menu-item:hover {
    text-decoration: none;
    color: blue;
}
.router-link-active {
    font-weight: 600;
    color: red;
}
@media all and (max-width : 990px) {
    aside {
        position: fixed;
        top: 0;
        left: 0;
        height: 0;
        z-index: 900;
    }
    .side-wrap {
        position: fixed;
        left: 0;
        padding-top: 50px;
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        border-right: 1px solid #aaaaaa;
        transform: translateX(-100%);
        transition: transform 0.4s;
    }
    .menuOn .side-wrap {
        transform: translateX(0);
    }
}
@media all and (max-width : 767px) {
}
</style>

