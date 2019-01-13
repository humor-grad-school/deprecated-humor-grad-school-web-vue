<template>
    <div class="board-preview">
        <preview-frame :color="color">
            <h3 slot="header">
                <i v-if="icon" class="material-icons md-16">{{ icon }}</i>
                <router-link :to="link" class="title">{{ title }}</router-link>
            </h3>
            <div class="loading" v-if="loading">
                <spinner />
            </div>
            <ul v-else>
                <li v-for="item in items" :key="item">
                    <router-link to="/">{{ item }}</router-link>
                </li>
            </ul>
        </preview-frame>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Spinner from '@/views/common/spinner.vue';
import PreviewFrame from './preview-frame.vue';
import { boardMapper, BoardData } from '@/modules/board-mapper.ts';

export default Vue.extend({
    components: { Spinner, PreviewFrame },
    props: {
        type: String
    },
    data() {
        return {
            loading: true,
            items: ['test 1', 'test 2', 'test 3', 'test 4', 'test 5', 'test 6', 'test 7', 'test 8', 'test 9']
        };
    },
    beforeMount() {
        // fetch board items
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },
    computed: {
        boardData(): BoardData {
            return boardMapper.getBoardConfig(this.type);
        },
        icon(): string {
            return this.boardData.icon;
        },
        title(): string {
            return this.boardData.title;
        },
        link(): string {
            return this.boardData.link;
        },
        color(): string {
            return this.boardData.color;
        }
    }
});
</script>

<style scoped>
.loading {
    text-align: center;
    height: 300px;
    line-height: 350px;
}
.title {
    color: #ffffff;
    padding-left: 6px;
    position: relative;
    top: -2px;
    text-decoration: none;
}
</style>
