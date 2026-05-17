import type { ProductProps } from "../../../../../../shared/types/Product";
import "./ProductSelectors.css";

interface ProductSelectorsProps {
    product: ProductProps;
    selectedDetail: number;
    onSelectDetail: (index: number) => void;
}

export const ProductSelectors = ({
    product,
    selectedDetail,
    onSelectDetail,
}: ProductSelectorsProps) => {
    const currentDetail = product.productDetails[selectedDetail];

    return (
        <div className="product-selectors">
            <div className="product-selectors__group">
                <p className="product-selectors__label">
                    Color <span>{currentDetail?.color.name}</span>
                </p>
                <div className="product-selectors__options">
                    {product.productDetails.map((detail, idx) => (
                        <button
                            key={detail.id}
                            onClick={() => onSelectDetail(idx)}
                            className={`product-selectors__color-option ${
                                selectedDetail === idx
                                    ? "product-selectors__option--selected"
                                    : ""
                            }`}
                            type="button"
                        >
                            <span
                                className="product-selectors__swatch"
                                style={{
                                    backgroundColor: detail.color.color,
                                }}
                            />
                            <span>{detail.color.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="product-selectors__group">
                <p className="product-selectors__label">
                    Talla <span>{currentDetail?.size}</span>
                </p>
                <div className="product-selectors__size-options">
                    {product.productDetails.map((detail, idx) => (
                        <button
                            key={detail.id}
                            onClick={() => onSelectDetail(idx)}
                            className={`product-selectors__size-option ${
                                selectedDetail === idx
                                    ? "product-selectors__option--selected"
                                    : ""
                            }`}
                            type="button"
                        >
                            {detail.size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
