<template>
    <div class="board-list">
        <table>
            
        </table>
        <ul>
            <component v-for="item in items" :key="item.id" :is="item.type"></component>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ImageHeader from './headers/image-header.vue';
import TextHeader from './headers/text-header.vue';
import ImageItem from '/items/image-item.vue';
import TextItem from '/items/text-item.vue';

export default Vue.extend({
    components: {
        ImageHeader, TextHeader, // headers
        ImageItem, TextItem // items
    },
    props: {
        boardType: {
            required: true,
            type: String,
            default: 'image'
        },
        items: {
            required: true,
            type: Array,
            default: []
        }
    }
});
</script>

<style scoped>

</style>
