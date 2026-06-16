import "./styles/style.css";

export const SubSections = ({
    subTitle,
    children,
}: {
    subTitle: string;
    children: React.ReactNode;
}) => {
    return (
        <section className="subSection-Container">
            <h1 className="subSection-title">{subTitle}</h1>
            <div>{children}</div>
        </section>
    );
};
