<template>
    <div id="app">
        <toolbar></toolbar>
        <div class="wrap">
            <router-view/>
        </div>
        <snackbar></snackbar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from '@/views/common/toolbar/toolbar.vue';
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
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }
.wrap {
    margin: 0 auto;
    padding-top: 128px;
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
