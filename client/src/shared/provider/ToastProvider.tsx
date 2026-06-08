import { useState } from "react";

import { Toast } from "../components/toast/Toast";
import { ToastContext, type ToastOptions } from "../context/toast.context";

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [queue, setQueue] = useState<ToastOptions[]>([]);
    const current = queue[0];

    const showToast = (opts: ToastOptions) => {
        setQueue((prev) => [...prev, opts]);
    };

    const handleClose = () => {
        setQueue((prev) => prev.slice(1));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast
                open={!!current}
                message={current?.message ?? ""}
                severity={current?.severity}
                onClose={handleClose}
            />
        </ToastContext.Provider>
    );
};
