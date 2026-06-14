import { useState } from "react";
import { emptyTable, type Table } from "../../../shared/types/Table.t";
import type { Order } from "../../order/types/Order.t";
import { GetOrdersService } from "../service/post-orders.service";

export const useGetOrdersClient = ({ status }: { status: string }) => {
    const [orders, setOrders] = useState<Table<Order>>(emptyTable());
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
