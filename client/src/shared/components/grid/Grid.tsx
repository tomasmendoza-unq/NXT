import "./styles/Grid.css";

export const Grid = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`grid-container ${className || ""}`}>{children}</div>
    );
};
