import { Outlet } from "react-router-dom";
import { Sidebard } from "../components/sidebar/Sidebar.tsx";
import "./styles/styles.css";

export const MainLayout = () => {
    return (
        <>
            <Sidebard />
            <main className="main-layout">
                <Outlet />
            </main>
        </>
    );
};
