import type { Order } from "../../types/Order.t";
import { ordersTableHeaders } from "./header/ordersTableHeaders";
import { OrderRow } from "./row/OrderRow";
import "./style/OrdersTable.css";

export const OrdersTable = ({
    orders,
    className,
}: {
    orders: Order[];
    className?: string;
}) => {
    if (orders.length === 0)
        return (
            <p className="text-center text-gray-500 py-12">
                No hay órdenes para mostrar.
            </p>
        );

    return (
        <div className={`table-wrapper ${className || ""}`}>
            <table className="table">
                <thead className="table-head">
                    <tr>
                        {ordersTableHeaders.map((header) => (
                            <th
                                key={header}
                                className="table-header"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <OrderRow
                            key={order.id}
                            order={order}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
