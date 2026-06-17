export const PaidButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            className="paid-button"
            onClick={onClick}
        >
            Marcar como pagada
        </button>
    );
};
