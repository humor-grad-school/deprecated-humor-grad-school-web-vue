export interface BoardData {
    icon?: string;
    title: string;
    link: string;
    color: string;
    type: string;
}
export interface HeaderData {
    text: string;
    width?: number;
}

const boards = {
    humor: {
        title: '웃긴 자료',
        type: 'image',
        link: '/board/humor',
        icon: 'tag_faces',
        color: '#e43b1a',
    },
    standby: {
        title: '대기 자료',
        type: 'image',
        link: '/board/standby',
        icon: 'face',
        color: '#f17d0c'
    }
};

const headers = {
    image: [
        { text: '이미지', width: 10 },
        { text: '제목', width: 40 },
        { text: '작성자', width: 16 },
        { text: '등록일', width: 16 },
        { text: '조회수', width: 9 },
        { text: '추천', width: 9 },        
    ],
    text: [
        { text: '번호', width: 12 },
        { text: '제목', width: 40 },
        { text: '작성자', width: 20 },
        { text: '등록일', width: 12 },
        { text: '조회수', width: 8 },
        { text: '추천', width: 8 },        
    ]
};

export default {
    getBoardConfig(boardName: string): BoardData {
        return boards[boardName];
    },
    getBoardHeader(type: string): HeaderData[] {
        return headers[type];
    } 
};