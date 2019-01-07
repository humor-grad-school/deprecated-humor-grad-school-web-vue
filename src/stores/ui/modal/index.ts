import { ModalState } from './types';

const modal: ModalState = {
    show: false,
    component: null
};

export default {
    namespaced: true,
    state: modal,
    getters: {
        show(state: ModalState) {
            return state.show;
        },
        component(state: ModalState) {
            return state.component;
        }
    },
    mutations: {
        show(state: ModalState, component = null) {
            state.component = component;
            state.show = true;
        },
        hide(state: ModalState) {
            state.show = false;
            state.component = null;
        }
    },
    actions: {
        show({ commit }, component) {
            commit('show', component);
        },
        hide({ commit }) {
            commit('hide');
        }
    }
};
