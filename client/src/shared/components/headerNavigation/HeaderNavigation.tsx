import { Link } from "react-router-dom";
import type { HeaderLink } from "./types/HeaderLink";
import "./styles/HeaderNavigation.css";

interface HeaderNavigationProps {
    links: HeaderLink[];
}

export const HeaderNavigation = ({ links }: HeaderNavigationProps) => {
    return (
        <nav className="header-navigation" aria-label="Breadcrumb">
            <ul className="header-navigation-list">
                {links.map((link, index) => {
                    const isLastItem = index === links.length - 1;

                    return (
                    <li
                        key={index}
                        className="header-navigation-item"
                        aria-current={isLastItem ? "page" : undefined}
                    >
                        {isLastItem ? (
                            <span className="header-navigation-current">
                                {link.text}
                            </span>
                        ) : (
                            <Link
                                className="header-navigation-link"
                                to={link.href}
                            >
                                {link.text}
                            </Link>
                        )}
                    </li>
                    );
                })}
            </ul>
        </nav>
    );
};
