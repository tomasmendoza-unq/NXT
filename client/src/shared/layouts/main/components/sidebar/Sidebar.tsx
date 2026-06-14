import { Link, useNavigate } from "react-router-dom";
import { links } from "./navLink";
import type { UserRole } from "./navLink";
import Person from "@mui/icons-material/Person";
import "./styles/styles.css";
import { IconText } from "../../../../components/iconText/iconText.tsx";
import logo from "../../../../../assets/logo.png";
import { useAuth } from "../../../../../features/auth/hooks/use-auth.ts";

const SidebarLogo = ({ className }: { className?: string }) => (
    <img
        className={className}
        src={logo}
        alt=""
        aria-hidden="true"
    />
);

export const Sidebard = ({ isOpen }: { isOpen: boolean }) => {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const currentRole = (user?.role ?? "guest") as UserRole;
    const visibleLinks = links.filter((link) =>
        link.roles.includes(currentRole),
    );

    const handleAuthClick = () => {
        if (isAuthenticated) {
            logout();
            navigate("/");
        } else {
            navigate("/auth/login");
        }
    };

    return (
        <nav className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <Link
                className="sidebar-brand"
                to="/"
            >
                <IconText icon={SidebarLogo}>NXT_STEPS</IconText>
            </Link>
            <ul>
                {visibleLinks.map((link) => (
                    <li key={link.path}>
                        <Link
                            className="sidebar-link"
                            to={link.path}
                        >
                            <IconText icon={link.icon}>{link.label}</IconText>
                        </Link>
                    </li>
                ))}
                <li>
                    <button
                        className="sidebar-link"
                        onClick={handleAuthClick}
                    >
                        <IconText icon={Person}>
                            {isAuthenticated ? user?.name : "Iniciar sesión"}
                        </IconText>
                    </button>
                </li>
            </ul>
        </nav>
    );
};
