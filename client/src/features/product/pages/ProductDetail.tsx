import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useGetProductById from "../hooks/use-get-product-by-id";

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { product, isLoading, error, fetch } = useGetProductById();

    useEffect(() => {
        if (id) {
            fetch(Number(id));
        }
    }, [id]);

    if (isLoading) {
        return <div className="p-4">Cargando...</div>;
    }

    if (error || !product) {
        return <div className="p-4">Error al cargar el producto</div>;
    }

    return (
        <section className="w-full mx-auto section-container p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Imagen */}
                <div>
                    {product.productDetails[0]?.image ? (
                        <img
                            src={product.productDetails[0].image}
                            alt={product.name}
                            className="w-full h-auto rounded-lg"
                        />
                    ) : (
                        <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400">Sin imagen</span>
                        </div>
                    )}
                </div>

                {/* Detalles */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-600 mb-4">{product.productModel}</p>

                    {/* Marca */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-500">Marca</p>
                        <div className="flex items-center gap-2">
                            <img
                                src={product.productBrand.image}
                                alt={product.productBrand.name}
                                className="h-8"
                            />
                            <span>{product.productBrand.name}</span>
                        </div>
                    </div>

                    {/* Detalles del producto */}
                    {product.productDetails.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-4">
                                Características
                            </h3>
                            <div className="space-y-4">
                                {product.productDetails.map((detail) => (
                                    <div
                                        key={detail.id}
                                        className="border p-4 rounded-lg"
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Tamaño
                                                </p>
                                                <p className="font-semibold">
                                                    {detail.size}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Color
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="w-4 h-4 rounded-full border"
                                                        style={{
                                                            backgroundColor:
                                                                detail.color
                                                                    .color,
                                                        }}
                                                    />
                                                    <p className="font-semibold">
                                                        {detail.color.name}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Precio
                                                </p>
                                                <p className="font-semibold text-lg text-orange-600">
                                                    $
                                                    {detail.price.toLocaleString()}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Stock
                                                </p>
                                                <p className="font-semibold">
                                                    {detail.quantity} unidades
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Botón de compra */}
                    <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </section>
    );
};
