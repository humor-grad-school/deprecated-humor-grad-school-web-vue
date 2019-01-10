<template>
    <div class="editor-area">
        <div id="editor"></div>
        <div class="publish">
            <button type="button" @click="publish">저&nbsp;&nbsp;&nbsp;장</button>
        </div>
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
            modules: {
                toolbar: [
                    [{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }],
                    [{ align: '' }, { align: 'center' }, { align: 'right' }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote', { 'color': [] }, { 'background': [] }],
                    ['image', 'video']
                ]
            },
            scrollingContainer: '#editor'
        });
    },
    data() {
        return {
            editor: null
        };
    },
    methods: {
        publish() {
            // this.editor.getContents();
        }
    },
    beforeDestroy() {
        this.editor = null;
    }
});
</script>

<style>
.editor-area {
    margin-bottom: 20px;
}
.editor-area #editor {
    margin-bottom: 20px;
    min-height: 300px;
    max-height: 500px;
    overflow: scroll;
    padding: 5px 0 20px 0;
}
.editor-area .ql-video {
    width: 720px;
    height: 405px;
}
.editor-area .publish {
    margin-bottom: 30px;
    text-align: center;
}
.editor-area .publish button {
    width: 140px;
    height: 60px;
    color: #ffffff;
    background-color: orange;
    font-weight: 600;
    font-size: 20px;
    border-radius: 12px;
}
</style>
