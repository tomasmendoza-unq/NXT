import { useEffect } from "react";
import { useGetOrders } from "../../hooks/use-get-orders";
import { OrdersTable } from "../../../order/components/table/OrdersTable";
import "./style/Order.css";
import { useParams } from "react-router-dom";

export const Orders = () => {
    const { status } = useParams<{ status: string }>();
    const { fetch, orders } = useGetOrders({ status: status ?? "" });

    useEffect(() => {
        fetch();
    }, []);

    return (
        <section>
            <h1>Ordenes de compra</h1>
            {orders.length > 0 ? (
                <OrdersTable
                    className="orders-table"
                    orders={orders}
                />
            ) : (
                <p>No orders found.</p>
            )}
        </section>
    );
};
