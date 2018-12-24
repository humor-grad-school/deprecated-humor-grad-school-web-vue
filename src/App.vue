<template>
    <div id="app">
        <toolbar></toolbar>
        <div class="wrap">
            <router-view name="sideMenu"></router-view>
            <router-view/>
        </div>
        <snackbar></snackbar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from '@/views/common/toolbar.vue';
import Snackbar from '@/views/common/snackbar.vue';

export default Vue.extend({
    components: {
        Toolbar, Snackbar
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
    margin: 0 auto;
    padding-top: 50px;
    width: 100%;
    max-width: 1080px;
}
.contents {
    float: left;
    width: 85%;
    min-height: 300px;
}

.hide { display: none; }
.m-show { display: none; }
.m-show_inline { display: none; }

@media all and (max-width : 990px) {
	.m-show { display: block; }
	.m-show_inline { display: inline; }
	.m-hide { display: none !important; }

    .contents {
        width: 100%;
    }
}

</style>
