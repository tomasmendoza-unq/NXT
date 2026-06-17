import { useParams } from "react-router-dom";
import { useGetOrderById } from "../../hooks/use-get-order-by-id";
import { useEffect } from "react";
import { LoadingSpinner } from "../../../../shared/components/loadingSpinner/LoadingSpinner";
import { OrderDetailLayout } from "../../../order/layout/OrderLayout";

export const OrderDetail = () => {
    const { idOrder } = useParams();

    const { fetch, data, isLoading } = useGetOrderById(idOrder!);

    useEffect(() => {
        fetch();
    }, [idOrder]);

    if (isLoading) return <LoadingSpinner overlay />;
    if (!data) return <p>No se encontró la orden.</p>;

    return <OrderDetailLayout order={data} />;
};
