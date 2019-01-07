<template>
    <div class="auth m-hide">
        <div v-if="isAuthorized">
            <router-link to="/profile" tag="button">
                내 ID
            </router-link>
            <button @click="signOut">
                로그아웃
            </button>
        </div>
        <div v-else>
            <router-link :to="{ path: '/account', query: { from: $route.path }}" tag="button">
                로그인
            </router-link> |
            <router-link :to="{ path: '/account', query: { from: $route.path }}" tag="button">
                가입하기
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        isAuthorized() {
            return this.$store.getters['auth/authorized'];
        }
    },
    methods: {
        signOut() {
            this.$store.dispatch('auth/signOut');
        }
    }
});
</script>


<style scoped>
.auth {
    float: right;
    height: 64px;
    line-height: 64px;
}
.auth button {
    height: 50px;
    line-height: 50px;
    padding-left: 12px;
    padding-right: 12px;
}
</style>
