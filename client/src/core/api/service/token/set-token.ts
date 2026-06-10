import type { AxiosResponse } from "axios";
import { TOKEN_KEY } from "./token-key";

function setToken(response: AxiosResponse): void {
    const token =
        response.headers["authorization"] || response.headers["Authorization"];
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
    }
}

export default setToken;
