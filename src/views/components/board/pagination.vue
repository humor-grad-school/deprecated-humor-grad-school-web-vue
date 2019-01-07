<template>
    <ul class="pagination">
        <li v-for="(pageNum, i) in 5" :key="pageNum">
            <button type="button"
                :class="{ 'active': currentPage === pageNum - 1 }"
                @click="$emit('change', i)">
                {{ pageNum }}
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
        }
    }
});
</script>
