import { useState, type ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "./auth.context";
import type { AuthUser } from "../types/AuthContext.t";
import getToken from "../../../core/api/service/token/get-token";
import { setToken } from "../../../core/api/service/token/set-token";
import { TOKEN_KEY } from "../../../core/api/service/token/token-key";
import type { AxiosResponse } from "axios";

const getUserFromToken = (): AuthUser | null => {
    const token = getToken();
    if (!token) return null;
    try {
        return jwtDecode<AuthUser>(token);
    } catch {
        return null;
    }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AuthUser | null>(getUserFromToken);

    const login = (response: AxiosResponse) => {
        setToken(response);
        setUser(jwtDecode<AuthUser>(getToken()));
    };

    const logout = () => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated: !!user, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
