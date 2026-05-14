import type { ReactNode, ComponentType } from "react";
import "./styles/styles.css";

interface IconTextProps {
    icon?: ComponentType<{ className?: string }>;
    children: ReactNode;
}

export const IconText = ({ icon: IconComponent, children }: IconTextProps) => {
    return (
        <span className="icon-text">
            <span className="icon-text-slot">
                {IconComponent && <IconComponent className="icon-text-icon" />}
            </span>
            <span>{children}</span>
        </span>
    );
};
