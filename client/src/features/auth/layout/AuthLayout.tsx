import { Outlet } from "react-router-dom";
import "./style/AuthLayout.css";

export const AuthLayout = () => {
    return (
        <main className="auth-layout">
            <Outlet />
        </main>
    );
};
