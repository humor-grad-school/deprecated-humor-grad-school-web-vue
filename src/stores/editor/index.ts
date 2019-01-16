import { EditorState } from './types';

const editor: EditorState = {
    postSetting: {
        source: '', // 'self' or path
        share: {
            others: true,
            facebook: true,
            twitter: true
        }
    },
    postData: null,
    tags: []
};

export default {
    namespaced: true,
    state: editor,
    getters: {
        share() {

        }
    },
    mutations: {

    },
    actions: {
        publish({ commit }, data) {
            
        }
    }
};
