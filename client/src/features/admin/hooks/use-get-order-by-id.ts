import { useState } from "react";
import type { OrderResponseDTO } from "../../order/api/types/OrderResponseDTO.t";
import { GetOrderByIdService } from "../service/get-order-by-id.service";

export const useGetOrderById = () => {
    const [order, setOrder] = useState<OrderResponseDTO | null>(null);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetch = async (orderId: string) => {
        try {
            setIsLoading(true);
            const response = await GetOrderByIdService(orderId);
            setOrder(response);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        order,
        isLoading,
        fetch,
    };
};
