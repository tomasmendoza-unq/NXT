import { useState } from "react";
import { emptyTable, type Table } from "../../../shared/types/Table.t";
import type { Order } from "../../order/types/Order.t";
import { GetOrdersService } from "../service/post-orders.service";

export const useGetOrdersClient = ({ status }: { status: string }) => {
    const [orders, setOrders] = useState<Table<Order>>(emptyTable());
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetch = async () => {
        setIsLoading(true);

        try {
            const response = await GetOrdersService({ status });
            setOrders(response);
        } finally {
            setIsLoading(false);
        }
    };
    return { orders, isLoading, fetch };
};
