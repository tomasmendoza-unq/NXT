import "./style/StatusBadge.css";

const statusClass: Record<string, string> = {
    PENDIENTE: "badge--pendiente",
    PAGADO: "badge--pagado",
    ENVIADO: "badge--enviado",
    ENTREGADO: "badge--entregado",
    CANCELADO: "badge--cancelado",
};

export const StatusBadge = ({ status }: { status: string }) => (
    <span className={`badge ${statusClass[status] ?? "badge--default"}`}>
        {status}
    </span>
);
