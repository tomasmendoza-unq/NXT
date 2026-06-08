import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebard } from "./components/sidebar/Sidebar.tsx";
import "./styles/styles.css";

export const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="main-layout-container">
            <button
                className="hamburger"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                ☰
            </button>
            <Sidebard isOpen={sidebarOpen} />
            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            <main className="main-layout">
                <Outlet />
            </main>
        </div>
    );
};
