<template>
    <thead>
        <tr>
            <th v-for="col in cols"
                :key="col.text"
                :style="{ width: col.width + '%' }">
                {{ col.text }}
            </th>
        </tr>
    </thead>
</template>

<script lang="ts">
import Vue from 'vue';
import boardMapper, { HeaderData } from '@/modules/board-mapper';

export default Vue.extend({
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
    width: 100%;
}
th {
    padding: 3px 8px;
    height: 32px;
    background-color: #CFDFEC;
    border-top: 2px solid #039BE5;
    border-bottom: 2px solid #dddddd;
    font-size: 14px;
    box-sizing: border-box;
    color: #444444;
}
</style>
