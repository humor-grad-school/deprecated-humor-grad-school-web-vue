<template>
    <div class="post-setting">
        <div class="source">
            <p>
                <i class="material-icons md-16">edit</i>
                직접 작성한 글인가요?
            </p>
            <div class="sub">
                <div class="source-self">
                    <input type="radio" name="source" value="self" v-model="sourceFrom">
                    <label for="outer">네, 직접 작성한 글입니다.</label>
                    <span class="self-warn" v-if="sourceFrom === 'self'">직접 작성한 글이 아닌 경우, 법적 문제를 야기시킬 수 있습니다.</span>
                </div>

                <div class="source-outer">
                    <input type="radio" name="source" value="outer" v-model="sourceFrom">
                    <label for="outer">아니요, 외부에서 가져온 자료입니다.</label>
                    <input type="text"
                        class="outer-input"
                        v-if="sourceFrom === 'outer'"
                        placeholder="출처를 입력해주세요."
                        v-model="source">
                </div>
            </div>
        </div>

        <div class="sharing">
            <p>
                <i class="material-icons md-16">share</i>
                아래 항목에 공유를 허락합니다.
            </p>
            <div class="sub">
                <input type="checkbox" v-model="share.others">
                <label for="allowShare"><span></span>외부 유머 사이트</label>
                <input type="checkbox" v-model="share.facebook">
                <label for="allowShare"><span></span>facebook</label>
                <input type="checkbox" v-model="share.twitter">
                <label for="allowShare"><span></span>twitter</label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            sourceFrom: 'outer',
            source: '',
            share: {
                others: true,
                facebook: true,
                twitter: true
            }
        };
    }
});
</script>

<style scoped>
.post-setting {
    margin-bottom: 20px;
    border: 1px dashed #cdcdcd;
    box-sizing: border-box;
    padding: 16px 20px;
    line-height: 32px;
    font-size: 14px;
}
.post-setting i {
    position: relative;
    top: 2px;
}
.post-setting input {
    position: relative;
    top: -2px;
    margin-right: 8px;
}
.post-setting label {
    margin-right: 18px;
}
.source {
    margin-bottom: 15px;
}
.sub {
    padding-left: 30px;
}
.self-warn {
    color: red;
    font-size: 10px;
}
.outer-input {
    width: 300px;
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    padding: 0 8px;
}
</style>
