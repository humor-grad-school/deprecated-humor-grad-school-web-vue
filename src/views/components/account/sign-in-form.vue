<template>
    <div class="sign-in-form">
        <form>
            <input type="text" placeholder="이메일" v-model="email" />
            <input type="password" placeholder="비밀번호" v-model="password" />
            <button type="button" @click="submit">로그인</button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import StringUtil from '@/utils/string-util.ts';

export default Vue.extend({
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        submit() {
            if (!this.email) {
                this.$store.dispatch('ui/snackbar/show', { msg: '이메일을 입력해주세요!', style: 'error' });
                return;
            }

            if (StringUtil.isValidEmail(this.email) === false) {
                this.$store.dispatch('ui/snackbar/show', { msg: '유효하지 않은 이메일입니다!', style: 'error' });
                return;
            } 

            if (!this.password) {
                this.$store.dispatch('ui/snackbar/show', { msg: '패스워드를 입력해주세요!', style: 'error' });
                return;
            }

            this.$store.dispatch('auth/signIn');
            const redirectPath = this.$route.query.from || '/';
            this.$router.push(redirectPath);
        }
    }
});
</script>

<style scoped>

</style>
