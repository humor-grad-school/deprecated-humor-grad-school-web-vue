import { BoardState, BoardPostState } from './types';
import { fetchGraphQL } from '@/api/fetchGraphQL';

const boardState: BoardState = {
    totalCount: 0,
    currentPage: 0,
    type: '',
    posts: [],
    boardName: '',
};

export default {
    namespaced: true,
    state: boardState,
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
        },
        boardName(state: BoardState): string {
            return state.boardName;
        },
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
        },
        setBoardName(state: BoardState, boardName: string) {
            state.boardName = boardName;
        }
    },
    actions: {
        async fetch({ commit }, { boardName, type, page }) {
            commit('setBoardType', type);
            commit('setCurrentPage', page);
            commit('setBoardName', boardName);

            const query = `{
                board(name: "${boardName}") {
                    id
                    posts(page: 0, pageSize: 10) {
                        id
                        title
                        thumbnailUrl
                        contentS3Key
                        writer {
                            id
                            username
                            avatarUrl
                        }
                        createdAt
                        isViewed
                        views
                        likes
                        isLiked
                        commentCount
                    }
                }
            }`;
            const { board } = await fetchGraphQL(query);
            commit('setPosts', board.posts);
        }
    }
};
