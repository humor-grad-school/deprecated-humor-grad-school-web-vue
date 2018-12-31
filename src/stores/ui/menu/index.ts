import { MenuState } from './types';

const menu: MenuState = {
    menuOn: false
};

export default {
    namespaced: true,
    state: menu,
    getters: {
        menuOn(state: MenuState) {
            return state.menuOn;
        }
    },
    mutations: {
        toggle(state: MenuState) {
            state.menuOn = !state.menuOn;
        }
    },
    actions: {
        toggle({ commit }) {
            commit('toggle');
        }
    }
};
