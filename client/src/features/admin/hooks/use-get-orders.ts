import { useState } from "react";
import { GetOrdersService } from "../service/get-orders.service";
import type { Order } from "../../order/types/Order.t";

export const useGetOrders = ({ status }: { status: string }) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetch = async () => {
        setLoading(true);

        try {
            const response = await GetOrdersService({ status });
            setOrders(response);
        } finally {
            setLoading(false);
        }
    };
    return { orders, loading, fetch };
};
