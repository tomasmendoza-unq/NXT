import { useNavigate } from "react-router-dom";
import type { Product } from "../../../../shared/types/Product";
import { ProductImage } from "../ProductImage";
import "./style/ProductCard.css";

export const ProductCard = ({ id, name, model, colors }: Product) => {
    const navigate = useNavigate();
    const price = colors[0]?.details[0]?.price ?? 0;
    const productImage = colors[0]?.details[0]?.image;

    return (
        <div
            onClick={() => navigate(`/products/${id}`)}
            className="product-card"
        >
            <ProductImage
                image={productImage}
                name={name}
            />
            <div className="product-card-info">
                <h3 className="product-card-name">{name}</h3>
                <p className="product-card-model">{model}</p>
                <p className="product-card-price">${price.toLocaleString()}</p>
            </div>
        </div>
    );
};
