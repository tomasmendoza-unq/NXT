import "./styles/style.css";

export const SubSections = ({
    subTitle,
    children,
}: {
    subTitle: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="mb-6 w-full subSection-Container">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {subTitle}
            </h3>
            <div>{children}</div>
        </div>
    );
};
