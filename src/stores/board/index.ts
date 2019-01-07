import { BoardState } from './types';

const board: BoardState = {
    count: 0,
    items: []
};

export default {
    namespaced: true,
    state: board,
    getters: {
        count(state: BoardState): number {
            return state.count;
        },
        items(state: BoardState) {
            return state.items;
        }
    },
    mutations: {
        setItems(state: BoardState, items) {
            state.items = items;
        }
    },
    actions: {
        async fetch({ commit }) {
            const items = [];
            // const { boardName, index, pageSize } = payload;
            // const items = await api.fetchBoard(boardName, index, pageSize);
            commit('setItems', items);
        }
    }
};
