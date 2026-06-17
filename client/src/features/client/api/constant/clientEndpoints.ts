export const CLIENT_ENDPOINTS = {
    POST_ORDERS: "/client/orders",
    GET_ORDER_BY_ID: (idOrder: string) => `/client/orders/${idOrder}`,
};
