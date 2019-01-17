import { EditorState } from './types';
import { HgsRestApi } from '@/api/types/generated/client/ClientApis';

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
        uploadImage({}, file: File) {
            console.log(file);
        },
        async publish({ commit }, { boardName, title, contents }) {
            const contentS3Key = '';
            // const contentS3Key = await api;
            HgsRestApi.writePost({}, {
                boardName,
                title,
                contentS3Key,
            });
        }
    }
};
