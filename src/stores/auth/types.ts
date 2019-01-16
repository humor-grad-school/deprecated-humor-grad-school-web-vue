export interface AuthState {
    authorized: boolean;
    provider: string;
    idToken: string;
    saveAuth: boolean;
}

export interface AuthPayload {
    provider: string;
    success?: any;
    error?: any;
}
