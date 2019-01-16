import { AuthState, AuthPayload } from './types';
import { initGoogle, signOut } from '@/modules/google-auth';
import { HgsRestApi } from '@/api/types/generated/client/ClientApis';

const auth: AuthState = {
    authorized: false,
    provider: '',
};

export default {
    namespaced: true,
    state: auth,
    getters: {
        authorized(state: AuthState) {
            return state.authorized;
        }
    },
    mutations: {
        signIn(state: AuthState) {
            state.authorized = true;
        },
        signOut(state: AuthState) {
            state.authorized = false;
        },
        setProvider(state: AuthState, provider: string) {
            state.provider = provider;
        },
        setSessionToken(state: AuthState, sessionToken) {
            console.log(sessionToken);
        }
    },
    actions: {
        signIn({ commit }) {
            commit('signIn');
        },
        signOut({ commit, state }) {
            if (state.provider === 'google') {
                signOut();
            }
            commit('signOut');
        },
        initGoogleAuth({ commit }, { provider, success = () => {}, error = () => {} }: AuthPayload) {
            commit('setProvider', provider);

            initGoogle({
                success: async (loginResult) => {
                    const { id_token: idToken } = loginResult.getAuthResponse();

                    try {
                        const origin = provider;
                        const requestData = {
                            authenticationRequestData: { idToken }
                        };

                        const res = await HgsRestApi.authenticate({ origin }, requestData);
                        const { data } = res;
                        commit('setSessionToken', data.sessionToken);
                        commit('signIn');
                        success(res);
                    } catch (statusCode) {
                        console.error(statusCode);
                        error();
                    }
                },
                error: () => {
                    error();
                }
            });
        }
    }
};
