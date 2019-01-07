import { AuthState } from './types';

const auth: AuthState = {
    authorized: false,
    emailVerified: false
};

export default {
    namespaced: true,
    state: auth,
    getters: {
        authorized(state: AuthState) {
            return state.authorized;
        },
        emailVerified(state: AuthState) {
            return state.emailVerified;
        }
    },
    mutations: {
        signIn(state: AuthState) {
            state.authorized = true;
        },
        signOut(state: AuthState) {
            state.authorized = false;
        },
        verifyEmail(state: AuthState) {
            state.emailVerified = true;
        }
    },
    actions: {
        signIn({ commit }) {
            commit('signIn');
        },
        signOut({ commit }) {
            commit('signOut');
        },
        verifyEmail({ commit }) {
            commit('verifyEmail');
        }
    }
};
