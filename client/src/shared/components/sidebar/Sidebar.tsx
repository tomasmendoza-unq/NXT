import { Link } from "react-router-dom";
import { TitleContainer } from "../general/TitleContainer";
import { links } from "./navLink";
import "./styles/styles.css";

export const Sidebard = () => {
    return (
        <nav className="sidebar">
            <TitleContainer title="NC" />
            <ul>
                {links.map((link) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className="sidebar-link"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
