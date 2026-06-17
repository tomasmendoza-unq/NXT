import "./style/OrderLayout.css";
import type { OrderResponseDTO } from "../api/types/OrderResponseDTO.t";

interface OrderDetailLayoutProps {
    order: OrderResponseDTO;
    children?: React.ReactNode;
}

export const OrderDetailLayout = ({
    order,
    children,
}: OrderDetailLayoutProps) => {
    return (
        <main className="order-detail">
            <header className="order-detail-header">
                <h1>Orden #{order.id}</h1>
                <span className="order-detail-status">{order.status}</span>
            </header>

            <section className="order-detail-info">
                <p>
                    <span>Fecha:</span> {order.createdAt}
                </p>
                <p>
                    <span>Total:</span> ${order.total.toLocaleString()}
                </p>
                {order.notes && (
                    <p>
                        <span>Notas:</span> {order.notes}
                    </p>
                )}
            </section>

            <section className="order-detail-client">
                <h2>Cliente</h2>
                <div className="order-detail-client-info">
                    <p>
                        <span>Nombre:</span> {order.client.firstName}{" "}
                        {order.client.lastName}
                    </p>
                    <p>
                        <span>Email:</span> {order.client.email}
                    </p>
                    <p>
                        <span>Teléfono:</span> {order.client.phone}
                    </p>
                </div>
            </section>

            <section className="order-detail-products">
                <h2>Productos</h2>
                <div className="order-detail-products-list">
                    {order.items.map((item) => (
                        <article
                            key={item.idDetail}
                            className="order-detail-item"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                            />
                            <div className="order-detail-item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-meta">
                                    Talle {item.detail.size}
                                </p>
                                <p className="item-meta">
                                    Cantidad: {item.quantity}
                                </p>
                            </div>
                            <p className="order-detail-item-price">
                                $
                                {(
                                    item.detail.price * item.quantity
                                ).toLocaleString()}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {children && <section>{children}</section>}
        </main>
    );
};
