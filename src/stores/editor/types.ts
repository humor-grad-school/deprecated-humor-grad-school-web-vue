export interface ShareList {
    others: boolean;
    facebook: boolean;
    twitter: boolean;
}

export interface PostSetting {
    source: string; // 'self' or path
    share: ShareList;
}

export interface EditorState {
    postSetting: PostSetting;
    postData: any;
    tags: string[];
}
