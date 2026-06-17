import { useParams } from "react-router-dom";
import { useGetOrderById } from "../../hooks/use-get-order-by-id";
import { useEffect } from "react";
import { LoadingSpinner } from "../../../../shared/components/loadingSpinner/LoadingSpinner";

export const OrderDetail = () => {
    const { idOrder } = useParams();

    const { fetch, data, isLoading } = useGetOrderById(idOrder!);

    useEffect(() => {
        fetch();
    }, [idOrder]);

    if (isLoading) return <LoadingSpinner overlay />;
    if (!data) return <p>No se encontró la orden.</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Orden #{data.id}</h1>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    {data.status}
                </span>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 space-y-1 text-sm text-gray-700">
                <p>
                    <span className="font-semibold">Fecha:</span>{" "}
                    {data.createdAt}
                </p>
                <p>
                    <span className="font-semibold">Total:</span> $
                    {data.total.toLocaleString()}
                </p>
                {data.notes && (
                    <p>
                        <span className="font-semibold">Notas:</span>{" "}
                        {data.notes}
                    </p>
                )}
            </div>

            <div>
                <h2 className="font-semibold text-base mb-3">Productos</h2>
                <div className="space-y-3">
                    {data.items.map((item) => (
                        <div
                            key={item.idDetail}
                            className="flex gap-4 items-center bg-gray-50 rounded-xl p-3"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1 text-sm">
                                <p className="font-medium">{item.name}</p>
                                <p className="text-gray-500">
                                    Talle {item.detail.size}
                                </p>
                                <p className="text-gray-500">
                                    Cantidad: {item.quantity}
                                </p>
                            </div>
                            <p className="font-semibold">
                                $
                                {(
                                    item.detail.price * item.quantity
                                ).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
