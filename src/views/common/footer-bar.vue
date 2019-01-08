<template>
    <footer>
        © {{ year }} 웃긴대학원 All rights reserved
        <a href="mailto:humorcontact@gmail.com">contact</a>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    computed: {
        year(): number {
            return new Date().getFullYear();
        }
    }
});
</script>

<style scoped>
footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30px;
    background-color: #F2F4F7;
    color: #888888;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
}
footer a {
    margin-left: 10px;
    color: #888888;
}
</style>
