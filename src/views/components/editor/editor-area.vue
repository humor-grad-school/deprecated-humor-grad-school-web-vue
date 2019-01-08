<template>
    <div class="editor-area">
        <div id="editor"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

export default Vue.extend({
    mounted() {
        this.editor = new Quill('#editor', {
            theme: 'snow',
            placeholder: '내용을 입력하세요.',
        });
    },
    data() {
        return {
            editor: null
        };
    },
    beforeDestroy() {
        this.editor = null;
        console.log('desedafsdfasdf');
    }
});
</script>

<style scoped>
.editor-area {
    margin-bottom: 20px;
}
</style>
