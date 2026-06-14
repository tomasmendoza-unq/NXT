import { useEffect } from "react";
import { useGetOrders } from "../../hooks/use-get-orders";
import { TableGeneric } from "../../../../shared/components/table/TableGeneric";
import "./style/Order.css";
import { useParams } from "react-router-dom";
import { Detail } from "../../../order/components/table/row/Detail";

export const Orders = () => {
    const { status } = useParams<{ status: string }>();
    const { fetch, orders } = useGetOrders({ status: status ?? "" });

    useEffect(() => {
        fetch();
    }, []);

    return (
        <section>
            <h1>Ordenes de compra</h1>
            <TableGeneric
                table={orders}
                childrenRow={(row) => (
                    <Detail
                        id={row.id}
                        role={"admin"}
                    />
                )}
            />
        </section>
    );
};
