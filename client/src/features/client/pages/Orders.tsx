import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { TableGeneric } from "../../../shared/components/table/TableGeneric";
import { Detail } from "../../order/components/table/row/Detail";
import { useGetOrdersClient } from "../hooks/use-get-orders-client";

export const Orders = () => {
    const { status } = useParams<{ status: string }>();
    const { fetch, orders } = useGetOrdersClient({ status: status ?? "" });

    useEffect(() => {
        fetch();
    }, [status]);
    return (
        <section>
            <h1>Ordenes de compra</h1>
            <TableGeneric
                table={orders}
                childrenRow={(row) => (
                    <Detail
                        id={row.id}
                        role={"client"}
                    />
                )}
            />
        </section>
    );
};
