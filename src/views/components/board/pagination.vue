<template>
    <ul class="pagination">
        <li>
            <button type="button"
                class="navigate-button prev"
                @click="navigatePrev">
                <i class="material-icons md-18">navigate_before</i> 이전
            </button>
        </li>
        <li v-for="(pageNum) in pagenationRange" :key="pageNum">
            <button type="button"
                class="page-button"
                :class="{ 'active': currentPage === pageNum }"
                @click="$emit('change', pageNum)">
                {{ pageNum }}
            </button>
        </li>
        <li>
            <button type="button"
                class="navigate-button next"
                @click="navigateNext">
                다음 <i class="material-icons md-18">navigate_next</i>
            </button>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        currentPage(): number {
            return this.$store.getters['board/currentPage'];
        },
        totalPages(): number {
            const totalCount = this.$store.getters['board/totalCount'];
            if (totalCount === 0) {
                return 1;
            }
            return Math.ceil(totalCount / 20);
        },
        pagenationRange(): number[] {
            const currentPage = this.currentPage;
            const totalPages = this.totalPages;
            const rest10 = currentPage % 10;
            const min = currentPage - rest10 + 1;
            let max = currentPage + (10 - rest10);
            if (totalPages < max) {
                max = totalPages;
            }

            const range = [];
            for (let i = min; i <= max; i++) {
                range.push(i);
            }
            return range;
        }
    },
    methods: {
        navigatePrev() {
            const currentPage = this.currentPage;
            if (currentPage <= 10) {
                return;
            }
            
            const prevPage = currentPage - 10 + (currentPage % 10);

            const boardName = this.$route.params.boardName;
            this.$router.push({ name: 'board', params: { boardName, page: prevPage } });
        },
        navigateNext() {
            // const currentPage = this.currentPage;
            // const totalPages = this.totalPages;
            // if ()
        }
    }
});
</script>

<style scoped>
.pagination {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 30px;
}
.pagination li {
    display: inline-block;
}
.pagination li button {
    height: 31px;
    border: 1px solid #bbbbbb;
    border-radius: 3px;
    margin: 0 6px;
    line-height: 30px;
    color: #333333;
    background-color: #ffffff;
    font-size: 14px;
}
.pagination li button:hover {
    color: #ffffff;
    background-color: #039BE5;
}
.navigate-button {
    width: 58px;
}
.navigate-button i {
    position: relative;
    top: 4px;
}
.navigate-button.prev {
    padding-right: 5px;
}
.navigate-button.next {
    padding-left: 5px;
}
.page-button {
    width: 30px;
}
.page-button.active {
    color: #ffffff;
    font-weight: 600;
    background-color: #039BE5;
}
</style>

