<template>
    <div class="board">
        {{ boardName }}
        <pagination
            :currentPage="page"
            :maxPages="5"
            @change="changePage"
            ></pagination>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Pagination from '@/views/components/board/pagination.vue';

export default Vue.extend({
    computed: {
        boardName() {
            return this.$route.params.boardName;
        }
    },
    components: { Pagination },
    data() {
        return {
            page: 0,
            perPage: 4,
            totalPages: 0,
            users: []
        };
    },
    methods: {
        fetchData() {
            this.$store.dispatch('board/fetch');
        },
        changePage(page) {
            this.page = page;
        },
    },
    watch: {
        page: {
            immediate: true,
            handler() {
                this.fetchData();
            }
        }
    }
});
</script>

<style scoped>

</style>
