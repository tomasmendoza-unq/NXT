import { Link } from "react-router-dom";
import { links } from "./navLink";
import "./styles/styles.css";
import { IconText } from "../../../../components/iconText/iconText.tsx";
import logo from "../../../../../assets/logo.png";

const SidebarLogo = ({ className }: { className?: string }) => (
    <img
        className={className}
        src={logo}
        alt=""
        aria-hidden="true"
    />
);

export const Sidebard = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <nav className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <Link
                className="sidebar-brand"
                to="/"
            >
                <IconText icon={SidebarLogo}>NXT_STEPS</IconText>
            </Link>
            <ul>
                {links.map((link) => (
                    <li key={link.path}>
                        <Link
                            className="sidebar-link"
                            to={link.path}
                        >
                            <IconText icon={link.icon}>{link.label}</IconText>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
