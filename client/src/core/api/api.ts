import axios, { AxiosError } from "axios";
import handleErrors from "./middlewares/error-handler/middlewares";

const API_BASE_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8081/api/v1";

const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use(
    (request) => request,
    (error: AxiosError) => handleErrors(error),
);

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => handleErrors(error),
);

export default api;
