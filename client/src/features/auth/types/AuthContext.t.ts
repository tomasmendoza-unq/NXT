import type { AxiosResponse } from "axios";

export interface AuthUser {
    id: number;
    name: string;
    role: string;
    exp: number;
}

export interface AuthContextType {
    user: AuthUser | null;
    isAuthenticated: boolean;
    login: (response: AxiosResponse) => void;
    logout: () => void;
}
