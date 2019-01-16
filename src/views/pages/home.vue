<template>
    <div class="home">
        <div class="board-preview-wrap">
            <board-preview type="best"></board-preview>
        </div>
        <div class="board-preview-wrap">
            <board-preview type="humor"></board-preview>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BoardPreview from '@/views/components/home/board-preview.vue';

export default Vue.extend({
    name: 'home',
    components: { BoardPreview }
});
</script>

<style>
.board-preview-wrap {
    float: left;
    width: 50%;
    padding: 0 4px;
    box-sizing: border-box;
}
</style>
