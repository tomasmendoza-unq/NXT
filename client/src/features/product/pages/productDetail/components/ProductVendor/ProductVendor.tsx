import type { ProductProps } from "../../../../../../shared/types/Product";
import "./ProductVendor.css";

interface ProductVendorProps {
    product: ProductProps;
}

export const ProductVendor = ({ product }: ProductVendorProps) => {
    return (
        <div className="product-vendor">
            <p className="product-vendor__label">Vendido por:</p>
            <div className="product-vendor__content">
                {product.productBrand.image && (
                    <div className="product-vendor__logo-box">
                        <img
                            src={product.productBrand.image}
                            alt={product.productBrand.name}
                            className="product-vendor__logo"
                        />
                    </div>
                )}
                <div>
                    <p className="product-vendor__name">
                        {product.productBrand.name}
                    </p>
                </div>
            </div>
        </div>
    );
};
