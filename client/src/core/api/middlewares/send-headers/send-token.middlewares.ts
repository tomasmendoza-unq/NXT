import type { InternalAxiosRequestConfig } from "axios";
import { getToken } from "../../service/token/get-token";

function sendToken(
    request: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
    const isToken = getToken();
    if (request.headers["X-Api-Key"]) return request;
    if (isToken) request.headers.Authorization = `Bearer ${isToken}`;
    return request;
}

export default sendToken;
