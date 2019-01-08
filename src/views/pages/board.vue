<template>
    <div class="board">
        <table>
            <board-header></board-header>
            <board-list></board-list>
        </table>
        <pagination @change="changePage"></pagination>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BoardHeader from '@/views/components/board/board-header.vue';
import BoardList from '@/views/components/board/board-list.vue';
import Pagination from '@/views/components/board/pagination.vue';
import boardMapper from '@/modules/board-mapper';

export default Vue.extend({
    components: { BoardHeader, BoardList, Pagination },
    beforeRouteEnter(to, _from, next) {
        next((vm: any) => {
            vm.fetchData(to);
        });
    },
    beforeRouteUpdate(to, _from, next) {
        this.fetchData(to);
        next();
    },
    methods: {
        fetchData(route) {
            const { boardName, page } = route.params;
            const type = boardMapper.getBoardConfig(boardName).type;
            this.$store.dispatch('board/fetch', { type, page: parseInt(page, 10) });
        },
        changePage(page) {
            const boardName = this.$route.params.boardName;
            this.$router.push({ name: 'board', params: { boardName, page } });
        }
    }
});
</script>

<style scoped>
table {
    width: 100%;
}
</style>
