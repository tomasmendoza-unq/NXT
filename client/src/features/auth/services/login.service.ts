import { api } from "../../../core";
import { AUTH_ENDPOINTS } from "../api/constants/authEndpoints";
import type { AuthForm } from "../types/Auth.t";

export const loginService = async (request: AuthForm) => {
    const response = await api.post(AUTH_ENDPOINTS.LOGIN, request);
    return response;
};
