export const OrderSummaryRow = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => {
    return (
        <div className="order-summary-row">
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
};
