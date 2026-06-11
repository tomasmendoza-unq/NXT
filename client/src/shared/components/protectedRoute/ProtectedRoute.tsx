import { Navigate } from "react-router";

import { useAuth } from "../../../features/auth/hooks/use-auth";
import { toastEmitter } from "../../../features/toast/emitter/toast-emitter";

interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: string;
}

export const ProtectedRoute = ({
    children,
    requiredRole,
}: ProtectedRouteProps) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        toastEmitter.emit({
            message: "Por favor inicia sesión para continuar",
            severity: "info",
        });
        return <Navigate to="/auth/login" />;
    }

    if (requiredRole && user?.role !== requiredRole) {
        toastEmitter.emit({
            message: "No tenés permisos para acceder",
            severity: "error",
        });
        return <Navigate to="/" />;
    }

    return children;
};
