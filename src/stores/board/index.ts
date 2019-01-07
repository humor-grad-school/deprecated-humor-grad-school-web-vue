import { BoardState } from './types';

const board: BoardState = {
    totalCount: 0,
    currentPage: 0,
    type: '',
    items: []
};

export default {
    namespaced: true,
    state: board,
    getters: {
        totalCount(state: BoardState): number {
            return state.totalCount;
        },
        currentPage(state: BoardState): number {
            return state.currentPage;
        },
        type(state: BoardState): string {
            return state.type;
        },
        items(state: BoardState) {
            return state.items;
        }
    },
    mutations: {
        setBoardType(state: BoardState, type) {
            state.type = type;
        },
        setCurrentPage(state: BoardState, page) {
            state.currentPage = page;
        },
        setItems(state: BoardState, items) {
            state.items = items;
        }
    },
    actions: {
        async fetch({ commit }, { type, page }) {
            commit('setBoardType', type);
            commit('setCurrentPage', page);

            const items = [];
            // const items = await api.fetchBoard(boardName, index, 20);
            commit('setItems', items);
        }
    }
};
