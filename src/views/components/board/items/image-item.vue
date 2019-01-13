<template>
    <tr>
        <!-- TODO: 각 항목 별로 component화 -->
        <td class="post-thumbnail"
            :style="{ width: cols[0].width + '%' }">
            <router-link :to="'/post/' + post.id"
                 :style="{ backgroundImage: 'url(' + post.thumbnail + ')'}">
            </router-link>
        </td>
        <td class="post-title"
            :style="{ width: cols[1].width + '%' }">
            <router-link :to="'/post/' + post.id">
                {{ post.title }}
                <span class="comment-count" v-if="post.commentCount">[{{ post.commentCount }}]</span>
            </router-link>
        </td> 
        <td class="post-writer"
            :style="{ width: cols[2].width + '%' }">
                <div class="post-writer-wrap">
                    <div class="writer-thumbnail"
                        :style="{ backgroundImage: 'url(' + post.writer.thumbnail + ')'}">
                    </div>
                    <router-link :to="'/profile/' + post.writer.id">{{ post.writer.username }}</router-link>
                </div>
        </td>
        <td :style="{ width: cols[3].width + '%' }">
            {{ post.createdAt }}
        </td>
        <td :style="{ width: cols[4].width + '%' }">
            {{ post.read }}
        </td>
        <td :style="{ width: cols[5].width + '%' }">
            <span class="like-count" :class="{ 'is-liked': post.isLiked }">{{ post.likes }}</span>
        </td>
    </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import { boardMapper, HeaderData } from '@/modules/board-mapper';

export default Vue.extend({
    props: ['post'],
    computed: {
        cols(): HeaderData[] {
            const boardType = this.$store.getters['board/type'];
            if (!boardType) {
                return [];
            }

            return boardMapper.getBoardHeader(boardType);
        }
    }

});
</script>

<style scoped>
tr {
    border-bottom: 1px solid #dddddd;
}
td {
    text-align: center;
    font-size: 14px;
    height: 60px;
    box-sizing: border-box;
    color: #333;
}
.post-thumbnail a {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}
.post-title {
    text-align: left;
    line-height: 60px;
}
.post-title a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 400px;
}
.comment-count {
    color: #87124F;
}
.post-writer {
    line-height: 60px;
    text-align: left;
}
.post-writer .post-writer-wrap {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 160px;
    overflow: hidden;
    padding-left: 8px;
}
.writer-thumbnail {
    position: relative;
    top: 8px;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 8px;
}
.like-count.is-liked {
    color: red;
}
</style>
