import { useEffect } from "react";
import { toastEmitter } from "./toast-emitter";
import { useToast } from "../hooks/toast/useToast";

export const ToastListener = () => {
    const { showToast } = useToast();

    useEffect(() => {
        const unsubscribe = toastEmitter.on((event) => {
            showToast(event);
        });
        return unsubscribe;
    }, [showToast]);

    return null;
};
