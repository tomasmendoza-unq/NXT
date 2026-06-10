import "./styles/LoadingSpinner.css";

type LoadingSpinnerProps = {
    overlay?: boolean;
};

export const LoadingSpinner = ({ overlay = false }: LoadingSpinnerProps) => {
    const content = (
        <div className="spinner-container">
            <div className="spinner" />
        </div>
    );

    if (overlay) {
        return <div className="loading-overlay">{content}</div>;
    }

    return content;
};
