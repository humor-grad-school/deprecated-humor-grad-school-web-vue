<template>
    <div class="warning-bar">
        <div class="warning-bar-wrap" v-if="isLowerThanIE10">
            <i class="material-icons md-12">warning</i>
            웃긴대학교는 Internet Explorer 10 이하를 지원하지 않습니다.
            원활한 홈페이지 이용을 위해 <a href="https://www.google.com/intl/ko_ALL/chrome/">Chrome</a>이나 <a href="https://whale.naver.com/ko/">웨일</a> 브라우저 사용을 추천합니다.
        </div>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    computed: {
        isLowerThanIE10() {
            return navigator.userAgent.indexOf("MSIE") >= 0;
        }
    }
});
</script>

<style scoped>
.warning-bar-wrap {
    height: 30px;
    background-color: red;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
}
.warning-bar-wrap a {
    color: #ffffff;
    text-decoration: underline;
}
.warning-bar-wrap i {
    position: relative;
    top: 2px;
}
</style>
