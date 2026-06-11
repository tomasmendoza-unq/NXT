import "./style/Card.css";

export const Card = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => {
    return (
        <section className="card-container">
            <h2>{title}</h2>
            <div className="card-content">{children}</div>
        </section>
    );
};
