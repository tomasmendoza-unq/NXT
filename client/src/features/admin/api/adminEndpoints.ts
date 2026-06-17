export const ADMIN_ENDPOINTS = {
    POST_ORDERS: "/admin/orders",
    UPDATE_ORDER_STATUS: "/admin/orders/update-status",
    POST_PRODUCTS: "/admin/products",
    GET_ORDER_BY_ID: (orderId: string) => `/admin/orders/${orderId}`,
};
