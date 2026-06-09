import { createContext } from "react";

export interface ToastOptions {
    message: string;
    severity?: "success" | "error" | "warning" | "info";
}

export interface ToastContextType {
    showToast: (options: ToastOptions) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);
