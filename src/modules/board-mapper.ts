export interface BoardData {
    icon?: string;
    title: string;
    link: string;
    color: string;
}

const boards = {
    humor: {
        icon: 'tag_faces',
        title: '웃긴 자료',
        link: '/board/humor',
        color: '#e43b1a'
    },
    standby: {
        icon: 'face',
        title: '대기 자료',
        link: '/board/standby',
        color: '#f17d0c'
    }
};

export default {
    getBoard(type: string): BoardData {
        return boards[type];
    }
};