export const CLIENT_ENDPOINTS = {
    POST_ORDERS: "/client/orders",
    POST_CHECKOUT: "/client/checkout",
    GET_ORDER_BY_ID: (idOrder: string) => `/client/orders/${idOrder}`,
};
