<template>
    <div class="snackbar">
        <button type="button"
            class="snackbar-btn"
            :class="[style, { shown: shown }]"
            @click="hide">
            {{ msg }}
        </button>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            shown: false
        };
    },
    computed: {
        show() {
            return this.$store.getters['ui/snackbar/show'];
        },
        msg() {
            return this.$store.getters['ui/snackbar/msg'];
        },
        style() {
            return this.$store.getters['ui/snackbar/style'];
        }
    },
    watch: {
        show(value: boolean) {
            this.shown = value;
        }
    },
    methods: {
        hide() {
            this.$store.dispatch('ui/snackbar/hide');
        }
    }
});
</script>

<style scoped>
.snackbar {
    position: fixed;
    top: -20px;
    width: 100vw;
    text-align: center;
    z-index: 9000;
}
.snackbar-btn {
    padding: 4px 16px;
    background-color: #ffffff;
    border-radius: 1px;
    border: 1px solid #bbbbbb;
    font-size: 15px;
    transform: translateY(-120px);
    transition: transform .4s;
}
.snackbar-btn.info {
    color: dodgerblue;
}
.snackbar-btn.warn {
    color: orange;
}
.snackbar-btn.error {
    color: red;
}
.snackbar-btn.shown {
    transform: translateY(30px);
}
</style>

