<template>
    <div class="preview-frame" :style="{ borderColor: this.color }">
        <div class="frame-header" :style="{ backgroundColor: this.color }">
            <slot name="header"></slot>
        </div>
        <div class="frame-body">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        color: {
            type: String,
            default: '#b1b1b1'
        }
    }
});
</script>

<style scoped>
.preview-frame {
    overflow: hidden;
    border-radius: 8px;
    border: 2px solid;
}
.frame-header {
    padding: 8px 12px;
    padding-bottom: 6px;
    height: 20px;
    color: #fff;
    font-weight: 500;
    line-height: 20px;
}
.frame-body {
    padding: 8px 12px;
}
</style>
