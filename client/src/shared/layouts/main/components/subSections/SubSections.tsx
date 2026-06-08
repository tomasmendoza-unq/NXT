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
            <h3 className="subSection-title">{subTitle}</h3>
            <div>{children}</div>
        </section>
    );
};
