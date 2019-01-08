import { BoardState, BoardPostState } from './types';

const board: BoardState = {
    totalCount: 0,
    currentPage: 0,
    type: '',
    posts: []
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
        posts(state: BoardState): BoardPostState[] {
            return state.posts;
        }
    },
    mutations: {
        setBoardType(state: BoardState, type) {
            state.type = type;
        },
        setCurrentPage(state: BoardState, page) {
            state.currentPage = page;
        },
        setPosts(state: BoardState, posts: BoardPostState[]) {
            state.posts = posts;
        }
    },
    actions: {
        async fetch({ commit }, { type, page }) {
            commit('setBoardType', type);
            commit('setCurrentPage', page);
            
            // const boardData = await api.fetchBoard(boardName, index, 20);
            const boardData = {
                posts: [
                    {
                        boardId: 123123,
                        id: 'post-1',
                        title: 'hellasdfsdaf asdf asdf as dasdd fsad asd asd fdsafasd sad adsff o, world',
                        thumbnail: 'http://i.huv.kr:8080/c1f6b1dd6f.jpg?c=2',
                        contentS3Key: '',
                        writer: {
                            id: 1,
                            username: 'smithoasdf asdf sad fsad fasd asdfo',
                            thumbnail: 'http://i.huv.kr:8080/b3aab0c5bcbcb4e7c7dfc0bd.jpg?c=2'
                        },
                        createdAt: '2019-01-07 12:21',
                        read: 12313,
                        likes: 10,
                        isLiked: true,
                        commentCount: 3
                    }
                ]
            };
            
            commit('setPosts', boardData.posts);
        }
    }
};
