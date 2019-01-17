<template>
    <div class="editor-area">
        <div class="title">
            <input type="text" v-model="title" placeholder="제목을 입력하세요." />
        </div>
        <div id="editor"></div>
        <post-setting></post-setting>
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

import PostSetting from '@/views/components/editor/post-setting.vue';

export default Vue.extend({
    components: { PostSetting },
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
            scrollingContainer: '#editor',
        });
        this.editor.format('align', 'center');
        // quill editor add image handler
        // this.editor.getModule('toolbar')
        //     .addHandler('image', this.selectLocalImage.bind(this));
    },
    data() {
        return {
            title: '',
            editor: null,
        };
    },
    methods: {
        selectLocalImage() {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.click();

            // Listen upload local image and save to server
            input.onchange = async () => {
                const file = input.files[0];

                // file type is only image.
                if (/^image\//.test(file.type)) {
                    const url = await this.$store.dispatch('editor/uploadImage', file);
                    this.insertImageToEditor(url);
                } else {
                    this.$store.dispatch('ui/snackbar/show', { msg: '이미지가 아닙니다.', style: 'error' });
                }
            };
        },
        insertImageToEditor(url: string) {
            const range = this.editor.getSelection();
            this.editor.insertEmbed(range.index, 'image', url);
        },
        publish() {
            const trimedTitle = this.title.trim();
            if (trimedTitle === '') {
                this.$store.dispatch('ui/snackbar/show', { msg: '제목을 입력해주세요.', style: 'error' });
                return;
            }
            const boardName = this.$store.getters['board/boardName'];
            const contents = this.editor.getContents();

            console.log(boardName, contents);
            // this.$store.dispatch('editor/publish', {
            //     boardName,
            //     title: this.title,
            //     contents
            // });
        }
    },
    beforeDestroy() {
        this.editor = null;
    }
});
</script>

<style>
.title {
    margin-bottom: 24px;
}
.title input {
    width: 100%;
    height: 60px;
    border: none;
    border-bottom: 1px solid #dddddd;
    font-size: 24px;
    padding: 16px 12px;
    box-sizing: border-box;
    outline: none;
}
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
