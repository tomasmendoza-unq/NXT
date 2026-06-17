import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TableGeneric } from "../../../shared/components/table/TableGeneric";
import { useGetOrdersClient } from "../hooks/use-get-orders-client";
import { Detail } from "../../order/components/detail/Detail";
import { LoadingSpinner } from "../../../shared/components/loadingSpinner/LoadingSpinner";

export const Orders = () => {
    const { status } = useParams<{ status: string }>();
    const { fetch, orders, isLoading } = useGetOrdersClient({
        status: status ?? "",
    });

    useEffect(() => {
        fetch();
    }, [status]);

    if (isLoading) {
        return <LoadingSpinner overlay />;
    }
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
