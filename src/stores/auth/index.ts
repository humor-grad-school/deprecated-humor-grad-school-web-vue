import { AuthState, AuthPayload } from './types';
import { initGoogle, signOutGoogle } from '@/modules/google-auth';
import { HgsRestApi } from '@/api/types/generated/client/ClientApis';
import { initFacebook, loginFacebook, signOutFacebook } from '@/modules/facebook-auth';

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
        setIdToken(state: AuthState, idToken: string) {
            state.idToken = idToken;
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
            const provider = state.provider;
            if (provider === 'google') {
                signOutGoogle();
            } else if (provider === 'facebook') {
                signOutFacebook();
            }

            commit('setAuthorized', false);
        },
        initGoogleAuth({ dispatch }, payload: AuthPayload) {
            initGoogle({
                success: async (loginResult) => {
                    const { id_token: idToken } = loginResult.getAuthResponse();
                    dispatch('authenticate', Object.assign(payload, { idToken }));
                },
                error: (err) => {
                    if (payload.error) {
                        payload.error(err);
                    }
                }
            });
        },
        initFacebookAuth() {
            initFacebook();
        },
        loginFacebookAuth({ dispatch }, payload: AuthPayload) {
            loginFacebook({
                success: async (loginResult) => {
                    const idToken = loginResult.accessToken;
                    dispatch('authenticate', Object.assign(payload, { idToken }));
                }
            });
        },
        async authenticate({ commit, state }, { provider, idToken, success, error }) {
            try {
                commit('setProvider', provider);
                commit('setIdToken', idToken);

                const requestData = {
                    authenticationRequestData: { idToken }
                };
                const res = await HgsRestApi.authenticate({ origin: provider }, requestData);
                
                if (res.isSuccessful) {
                    const sessionToken = res.data.sessionToken;
                    HgsRestApi.setSessionToken(sessionToken);
                    if (state.saveAuth) {
                        localStorage.setItem('sessionToken', sessionToken);
                    }

                    if (success) {
                        success();
                    }

                    commit('setAuthorized', true);
                } else {
                    if (error) {
                        error(res.errorCode);
                    }

                    commit('setAuthorized', false);
                }
            } catch (statusCode) {
                if (error) {
                    error(statusCode);
                }
            }
        },
        async signUp({ dispatch, state }, { username, success, error }) {
            try {
                const signUpResponse = await HgsRestApi.signUp({}, {
                    authenticationRequestData: {
                        idToken: state.idToken
                    },
                    origin: state.provider,
                    username,
                });

                if (signUpResponse.isSuccessful) {
                    dispatch('authenticate', {
                        provider: state.provider,
                        idToken: state.idToken,
                        success,
                        error,
                    });
                } else {
                    error(signUpResponse.errorCode);
                }
            } catch (err) {
                error(err);
            }
        },
    }
};
