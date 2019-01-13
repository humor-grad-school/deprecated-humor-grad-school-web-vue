<template>
    <div class="write-button" v-if="isAuthenticated && isWritable">
        <router-link :to="'/editor'" tag="button">
            <i class="material-icons md-16">edit</i>
            글쓰기
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { boardMapper } from '@/modules/board-mapper';

export default Vue.extend({
    computed: {
        isAuthenticated() {
            return this.$store.getters['auth/authorized'];
        },
        isWritable() {
            const boardName = this.$route.params.boardName;
            return boardMapper.getBoardConfig(boardName).allowWriting;
        }
    }
});
</script>

<style scoped>
.write-button {
    padding: 15px 0;
}
.write-button button {
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    background-color: #039BE5;
    width: 85px;
    height: 32px;
    border-radius: 5px;
}
.write-button button i {
    position: relative;
    top: 2px;
}
</style>
