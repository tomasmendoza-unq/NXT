import { AxiosError } from "axios";
import { InternalError } from "../../errors/server-error/internal-error";
import { UknowError } from "../../errors/server-error/uknow-error";
import { NotFoundError } from "../../errors/client-error/not-found";
import { toastEmitter } from "../../../../features/toast/emitter/toast-emitter";

interface BackendError {
    message?: string;
    error?: string;
}

function handleErrors(error: AxiosError) {
    const data = error.response?.data as BackendError | undefined;
    const message = data?.message || data?.error;

    if (!error.response) {
        toastEmitter.emit({ message: "Error desconocido", severity: "error" });
        throw new UknowError();
    }

    if (error.response.status === 404) {
        toastEmitter.emit({
            message: message ?? "Recurso no encontrado",
            severity: "error",
        });
        throw new NotFoundError();
    }

    if (error.response.status >= 500) {
        toastEmitter.emit({
            message: message ?? "Error interno del servidor",
            severity: "error",
        });
        throw new InternalError();
    }

    toastEmitter.emit({
        message: message ?? "Error inesperado",
        severity: "error",
    });
    throw error;
}

export default handleErrors;
