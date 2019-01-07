export interface BoardData {
    icon?: string;
    title: string;
    link: string;
    color: string;
    type: string;
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
    image: ['이미지', '제목', '작성자', '등록일', '조회수', '추천/반대'],
    text: ['번호', '제목', '질문자/답변자', '등록일', '조회수', '추천/반대']
};

export default {
    getBoardConfig(boardName: string): BoardData {
        return boards[boardName];
    },
    getBoardHeader(type: string): string[] {
        return headers[type];
    } 
};