import { AuthState, AuthPayload } from './types';
import { initGoogle, signOutGoogle } from '@/modules/google-auth';
import { HgsRestApi } from '@/api/types/generated/client/ClientApis';
import { initFacebook, loginFacebook } from '@/modules/facebook-auth';

const auth: AuthState = {
    authorized: false,
    provider: '',
    idToken: '',
    saveAuth: false,
};

export default {
    namespaced: true,
    state: auth,
    getters: {
        authorized(state: AuthState) {
            return state.authorized;
        },
        saveAuth(state: AuthState) {
            return state.saveAuth;
        },
        provider(state: AuthState) {
            return state.provider;
        },
        idToken(state: AuthState) {
            return state.idToken;
        },
    },
    mutations: {
        saveAuth(state: AuthState, value: boolean) {
            state.saveAuth = value;
        },
        setAuthorized(state: AuthState, value: boolean) {
            state.authorized = value;
        },
        setProvider(state: AuthState, provider: string) {
            state.provider = provider;
        },
    },
    actions: {
        saveAuth({ commit }, value) {
            commit('saveAuth', value);
        },
        signOut({ commit, state }) {
            if (state.provider === 'google') {
                signOutGoogle();
            }

            commit('setAuthorized', false);
        },
        initGoogleAuth({ commit, state }, { provider, success = () => {}, error = () => {} }: AuthPayload) {
            initGoogle({
                success: async (loginResult) => {
                    commit('setProvider', provider);

                    const { id_token: idToken } = loginResult.getAuthResponse();

                    try {
                        const origin = provider;
                        const requestData = {
                            authenticationRequestData: { idToken }
                        };
                        const res = await HgsRestApi.authenticate({ origin }, requestData);
                        
                        if (res.isSuccessful) {
                            const sessionToken = res.data.sessionToken;
                            HgsRestApi.setSessionToken(sessionToken);
                            if (state.saveAuth) {
                                localStorage.setItem('sessionToken', sessionToken);
                            }

                            success();
                        } else {
                            error(res.errorCode);
                        }
                    } catch (statusCode) {
                        error(statusCode);
                    }
                },
                error: () => {
                    error();
                }
            });
        },
        initFacebookAuth() {
            initFacebook();
        },
        loginFacebookAuth({ commit, state }, { provider, success = () => {}, error = () => {} }: AuthPayload) {
            commit('setProvider', provider);

            loginFacebook({
                success: async (loginResult) => {
                    const idToken = loginResult.accessToken;

                    try {
                        const origin = provider;
                        const requestData = {
                            authenticationRequestData: { idToken }
                        };
                        const res = await HgsRestApi.authenticate({ origin }, requestData);
                        
                        if (res.isSuccessful) {
                            const sessionToken = res.data.sessionToken;
                            HgsRestApi.setSessionToken(sessionToken);
                            if (state.saveAuth) {
                                localStorage.setItem('sessionToken', sessionToken);
                            }

                            success();
                        } else {
                            error(res.errorCode);
                        }
                    } catch (statusCode) {
                        error(statusCode);
                    }
                }
            });
        }
    }
};
