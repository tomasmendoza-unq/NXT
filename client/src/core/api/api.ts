import axios, { AxiosError } from "axios";
import handleErrors from "./middlewares/error-handler/middlewares";
import { getToken } from "./service/token/get-token";

const API_BASE_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8081/api/v1";

const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use(
    (request) => {
        const token = getToken();
        if (token) {
            request.headers["Authorization"] = `Bearer ${token}`;
        }

        if (
            ["POST", "PUT", "PATCH"].includes(
                request.method?.toUpperCase() ?? "",
            ) &&
            !request.headers["Idempotency-Key"]
        ) {
            request.headers["Idempotency-Key"] = crypto.randomUUID();
        }

        return request;
    },
    (error: AxiosError) => handleErrors(error),
);

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => handleErrors(error),
);

export default api;
