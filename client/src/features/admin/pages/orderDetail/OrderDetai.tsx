import { useEffect } from "react";
import { OrderDetailLayout } from "../../../order/layout/OrderLayout";
import { useGetOrderById } from "../../hooks/use-get-order-by-id";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../../../shared/components/loadingSpinner/LoadingSpinner";
import { PaidButton } from "./components/PaidButton";

export const OrderDetail = () => {
    const orderId = useParams().orderId as string;
    const { fetch, order, isLoading } = useGetOrderById();

    useEffect(() => {
        fetch(orderId);
    }, [orderId]);

    if (isLoading) return <LoadingSpinner overlay />;
    if (!order) return <p>No se encontró la orden.</p>;

    return (
        <OrderDetailLayout order={order}>
            <PaidButton
                onClick={() => {
                    // Aquí puedes agregar la lógica para marcar la orden como pagada
                    console.log(`Orden ${order.id} marcada como pagada`);
                }}
            />
        </OrderDetailLayout>
    );
};
