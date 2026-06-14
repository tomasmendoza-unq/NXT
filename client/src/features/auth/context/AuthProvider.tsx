import { useState, type ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "./auth.context";
import type { AuthUser } from "../types/AuthContext.t";
import { setToken } from "../../../core/api/service/token/set-token";
import { TOKEN_KEY } from "../../../core/api/service/token/token-key";
import type { AxiosResponse } from "axios";
import { getToken } from "../../../core/api/service/token/get-token";

const getUserFromToken = (): AuthUser | null => {
    const token = getToken();
    if (!token) return null;

    try {
        const decoded = jwtDecode<AuthUser>(token);

        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
            localStorage.removeItem(TOKEN_KEY);
            return null;
        }
        return decoded;
    } catch {
        return null;
    }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<AuthUser | null>(getUserFromToken);

    const login = (response: AxiosResponse) => {
        setToken(response);

        const token = getToken();
        if (!token) return;

        setUser(jwtDecode<AuthUser>(token));
    };

    const logout = () => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
