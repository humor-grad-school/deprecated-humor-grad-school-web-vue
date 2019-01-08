<template>
    <div class="editor">
        <caution></caution>
        <editor-area></editor-area>
        <post-setting></post-setting>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Caution from '@/views/components/editor/caution.vue';
import EditorArea from '@/views/components/editor/editor-area.vue';
import PostSetting from '@/views/components/editor/post-setting.vue';

export default Vue.extend({
    name: 'editor',
    components: { Caution, EditorArea, PostSetting }
});
</script>
