import { toProductPreview } from "../../adapters/product-request.adapater";
import type { ProductRequestDTO } from "../../api/types/product-request";
import { ProductLayout } from "../layout/ProductLayout";

export const PreviewProduct = ({ product }: { product: ProductRequestDTO }) => {
    const hasColors = product.colors.length > 0;
    const hasDetails = product.colors.some((c) =>
        c.details.some((d) => d.image !== ""),
    );

    return (
        <div className="preview-product">
            {hasDetails ? (
                <ProductLayout product={toProductPreview(product)} />
            ) : (
                <>
                    <h2>Vista previa</h2>
                    <p>Nombre: {product.name || "—"}</p>
                    <p>Modelo: {product.model || "—"}</p>

                    {hasColors && (
                        <div>
                            <p>Colores:</p>
                            {product.colors.map((c, i) => (
                                <span
                                    key={i}
                                    style={{ background: c.color }}
                                >
                                    {c.name}
                                </span>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
