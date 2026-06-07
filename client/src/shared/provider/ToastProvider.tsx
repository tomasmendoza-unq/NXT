import { useState } from "react";

import { Toast } from "../components/toast/Toast";
import { ToastContext, type ToastOptions } from "../context/toast.context";

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<ToastOptions>({ message: "" });

    const showToast = (opts: ToastOptions) => {
        setOptions(opts);
        setOpen(true);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast
                open={open}
                message={options.message}
                severity={options.severity}
                onClose={() => setOpen(false)}
            />
        </ToastContext.Provider>
    );
};
