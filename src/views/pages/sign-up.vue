<template>
    <div class="sign-up">
        <h1>회원 가입 하기</h1>
        <span>학생 이름 : </span><input type="text" v-model="username">
        <button @click="signUp()">입학 원서 제출하기</button>
    </div>
</template>

<script lang="ts" src="./sign-up.ts">
</script>
