export interface BoardPostState {

}

export interface ImagePostState extends BoardPostState {

}

export interface TextPostState extends BoardPostState {

}

export interface BoardState {
    totalCount: number;
    currentPage: number;
    type: string;
    posts: BoardPostState[];
    boardName: string;
}