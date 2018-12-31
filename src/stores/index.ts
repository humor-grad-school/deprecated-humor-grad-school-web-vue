import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import board from './board';
import ui from './ui';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        board,
        ui
    }
});
