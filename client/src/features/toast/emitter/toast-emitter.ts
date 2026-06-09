type ToastEvent = {
    message: string;
    severity: "success" | "error" | "warning" | "info";
};

type ToastListener = (event: ToastEvent) => void;

const listeners: ToastListener[] = [];

export const toastEmitter = {
    emit: (event: ToastEvent) => {
        listeners.forEach((listener) => listener(event));
    },
    on: (listener: ToastListener) => {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) listeners.splice(index, 1);
        };
    },
};
