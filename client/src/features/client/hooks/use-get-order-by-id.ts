import { useState } from "react";
import { getOrderById } from "../service/get-order-by-id.service";
import type { OrderResponseDTO } from "../../order/api/types/OrderResponseDTO.t";

export const useGetOrderById = (idOrder: string) => {
    const [data, setData] = useState<OrderResponseDTO | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetch = async () => {
        try {
            setIsLoading(true);
            const response = await getOrderById(idOrder);
            setData(response);
        } finally {
            setIsLoading(false);
        }
    };

    return { fetch, data, isLoading };
};
