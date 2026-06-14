import type { Order } from "../../../types/Order.t";
import { Detail } from "./Detail";
import { StatusBadge } from "./StatusBadge";
import "./style/OrderRow.css";

export const OrderRow = ({ order }: { order: Order }) => (
    <tr className="table-body-row">
        <td className="table-cell-id">#{order.id}</td>
        <td className="table-cell">{order.email}</td>
        <td className="table-cell-total">${order.total.toFixed(2)}</td>
        <td className="table-cell">
            <StatusBadge status={order.status} />
        </td>
        <td className="table-cell">
            {new Date(order.createdAt).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "short",
                day: "numeric",
            })}
        </td>
        <td className="table-cell-id">
            <Detail />
        </td>
    </tr>
);
