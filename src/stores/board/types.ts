export interface BoardState {
    totalCount: number;
    currentPage: number;
    type: string;
    items: object[];
}

interface BoardItemState {

}

export interface ImageItemState extends BoardItemState {

}

export interface TextItemState extends BoardItemState {

}