<template>
    <thead>
        <tr>
            <th v-for="col in cols" :key="col"></th>
        </tr>
    </thead>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            cols: ['번호', '제목', '질문자/답변자', '등록일', '조회수', '추천/반대']
        };
    }
});
</script>
