<template>
    <div class="board-preview">
        <preview-frame>
            <h3 slot="header">
                <i v-if="icon" class="material-icons md-36">{{ icon }}</i>
                {{ title }}
            </h3>
            <div v-if="loading">
                loading...
            </div>
            <ul v-else>
                <li v-for="item in items" :key="item">
                    <router-link to="/">{{ item }}</router-link>
                </li>
            </ul>
        </preview-frame>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PreviewFrame from './preview-frame.vue';

export default Vue.extend({
    components: { PreviewFrame },
    props: {
        icon: String,
        title: {
            type: String,
            default: 'Untitled'
        }
    },
    data() {
        return {
            loading: true,
            items: ['test 1', 'test 2', 'test 3']
        };
    },
    beforeMount() {
        // fetch board items
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },
    computed: {}
});
</script>

<style scoped>
.board-preview {
    float: left;
}
</style>
