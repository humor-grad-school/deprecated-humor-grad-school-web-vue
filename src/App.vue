<template>
    <div id="app">
        <toolbar></toolbar>
        <div class="wrap">
            <router-view/>
        </div>
        <snackbar></snackbar>
        <modal></modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from '@/views/common/toolbar/toolbar.vue';
import Snackbar from '@/views/common/snackbar.vue';
import Modal from '@/views/common/modal.vue';
import FooterBar from '@/views/common/footer-bar.vue';

export default Vue.extend({
    components: {
        Toolbar, Snackbar, Modal, FooterBar
    }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
}
.wrap {
    position: relative;
    margin: 0 auto;
    padding-top: 128px;
    width: 100%;
    max-width: 1080px;
}
</style>
