<template>
    <div class="announcement">
        <h2>공지사항</h2>
        <ul>
            <li>정치적인 글은 삼가주시기 바랍니다.</li>
            <li>지나치게 선정적인 글은 위험해요!</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    
});
</script>


<style scoped>
.announcement {
    margin-bottom: 30px;
    border-top: 2px solid #555555;
    border-bottom: 1px solid #555555;
    padding: 12px 20px;
}
h2 {
    font-size: 14px;
    line-height: 24px;
}
ul {
    padding: 0 20px;
    list-style-type: circle;
    font-size: 12px;
    line-height: 24px;
}
</style>
