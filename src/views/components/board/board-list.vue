<template>
    <tbody class="board-list">
        <component v-for="item in posts"
            :key="item.id"
            :is="getBoardItemComponent()"
            :post="item">
        </component>
    </tbody>
</template>

<script lang="ts">
import Vue from 'vue';
import ImageItem from './items/image-item.vue';
import TextItem from './items/text-item.vue';

export default Vue.extend({
    components: {
        ImageItem, TextItem // items
    },
    computed: {
        type() {
            return this.$store.getters['board/type'];
        },
        posts() {
            return this.$store.getters['board/posts'];
        }
    },
    methods: {
        getBoardItemComponent() {
            if (this.type === 'image') {
                return ImageItem;
            } else if (this.type === 'text') {
                return TextItem;
            }

            return null;
        }
    }
});
</script>

<style scoped>

</style>
