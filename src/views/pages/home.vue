<template>
    <div class="home">
        <board-preview title="웃긴자료"></board-preview>
        <board-preview title="대기자료"></board-preview>
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
.board-preview {
    width: 50%;
}
</style>
