import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type ToastSeverity = "success" | "error" | "warning" | "info";

interface ToastProps {
    open: boolean;
    message: string;
    severity?: ToastSeverity;
    onClose: () => void;
}

export const Toast = ({
    open,
    message,
    severity = "success",
    onClose,
}: ToastProps) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert
                severity={severity}
                onClose={onClose}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
