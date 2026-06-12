import { useState } from "react";
import { GetOrdersService } from "../service/get-orders.service";
import type { Order } from "../../order/types/Order.t";
import { emptyPage, type Page } from "../../../shared/types/Page";

export const useGetOrders = ({ status }: { status: string }) => {
    const [orders, setOrders] = useState<Page<Order>>(emptyPage());
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
