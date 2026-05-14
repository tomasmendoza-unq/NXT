import { Link } from "react-router-dom";
import { TitleContainer } from "../general/TitleContainer";
import { links } from "./navLink";
import "./styles/styles.css";
import { IconText } from "../iconText/iconText";

export const Sidebard = () => {
    return (
        <nav className="sidebar">
            <TitleContainer title="NC" />
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
