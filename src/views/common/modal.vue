<template>
    <div class="modal">
        <div class="modal-wrap" v-if="show">
            <div class="dim" @click="hide"></div>
            <component class="modal-component" :is="modalComponent"></component>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        show() {
            return this.$store.getters['ui/modal/show'];
        },
        modalComponent() {
            return this.$store.getters['ui/modal/component'];
        }
    },
    methods: {
        hide() {
            this.$store.dispatch('ui/modal/hide');
        }
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
}
.modal-wrap {
    width: 100vw;
    height: 100vh;
}
.dim {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
.modal-component {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 1080px;
    max-height: 80%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    overflow: scroll;
}
</style>
