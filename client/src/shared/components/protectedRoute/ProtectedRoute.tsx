import { useEffect } from "react";
import { Navigate } from "react-router-dom";
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

    useEffect(() => {
        if (!isAuthenticated) {
            toastEmitter.emit({
                message: "Por favor inicia sesión para continuar",
                severity: "info",
            });
        } else if (requiredRole && user?.role !== requiredRole) {
            toastEmitter.emit({
                message: "No tenés permisos para acceder",
                severity: "error",
            });
        }
    }, [isAuthenticated, requiredRole, user?.role]);

    if (!isAuthenticated) return <Navigate to="/auth/login" />;
    if (requiredRole && user?.role !== requiredRole) return <Navigate to="/" />;

    return children;
};
