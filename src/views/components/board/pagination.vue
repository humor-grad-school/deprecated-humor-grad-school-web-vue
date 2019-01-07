<template>
    <ul class="pagination">
        <li v-for="(pageNum, i) in maxPages" :key="pageNum">
            <a href='#'
                :class="{ 'active': currentPage === pageNum - 1 }"
                @click="$emit('change', i - 1)">
                {{ i }}
            </a>
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        currentPage: {
            required: true,
            default: 0
        },
        maxPages: {
            required: true,
            type: Number,
            default: 1
        }
    }
});
</script>
