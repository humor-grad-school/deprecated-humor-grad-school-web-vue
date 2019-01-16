export interface AuthState {
    authorized: boolean;
    provider: string;
}

export interface AuthPayload {
    provider: string;
    success?: any;
    error?: any;
}
