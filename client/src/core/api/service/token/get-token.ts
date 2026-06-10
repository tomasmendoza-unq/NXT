import { TOKEN_KEY } from "./token-key";

export function getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function requireToken(): string {
    const token = getToken();

    if (!token) {
        throw new Error("No hay token de autenticación");
    }

    return token;
}
