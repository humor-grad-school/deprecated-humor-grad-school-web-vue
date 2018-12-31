import { SnackbarState } from './types';

const snackbar: SnackbarState = {
    show: false,
    msg: '',
    style: 'info', // ['info', 'warn', 'error']
    timeout: 3000
};

export default {
    namespaced: true,
    state: snackbar,
    getters: {
        show(state: SnackbarState) {
            return state.show;
        },
        msg(state: SnackbarState) {
            return state.msg;
        },
        style(state: SnackbarState) {
            return state.style;
        },
        timeout(state: SnackbarState) {
            return state.timeout;
        }
    },
    mutations: {
        show(state: SnackbarState, payload) {
            Object.assign(state, payload);
            state.show = true;
        },
        hide(state: SnackbarState) {
            state.show = false;
        }
    },
    actions: {
        show({ commit, state }, payload) {
            commit('show', payload);
            setTimeout(() => {
                if (state.show) {
                    commit('hide');
                }
            }, state.timeout);
        },
        hide({ commit }) {
            commit('hide');
        }
    }
};
