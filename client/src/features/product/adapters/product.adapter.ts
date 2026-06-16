import { adaptBrand } from "../../brand/adapters/brand.adapter";
import type { ProductDetails } from "../../../shared/types/ProductDetails";
import type { Color } from "../../../shared/types/Color";
import type { Product } from "../../../shared/types/Product";
import type {
    ColorResponseDTO,
    ProductDetailsResponseDTO,
    ProductResponseDTO,
} from "../api/types/product-response";

function adaptProductDetail(detail: ProductDetailsResponseDTO): ProductDetails {
    return {
        id: detail.id,
        size: detail.size,
        price: detail.price,
        quantity: detail.quantity,
    };
}

function adaptColor(color: ColorResponseDTO): Color {
    return {
        id: color.id,
        name: color.name,
        color: color.color,
        image: color.image,
        gallery: color.gallery,
        details: color.variants.map(adaptProductDetail),
    };
}

export function adaptProduct(product: ProductResponseDTO): Product {
    return {
        id: product.id,
        model: product.model,
        brand: adaptBrand(product.brand),
        colors: product.colors.map(adaptColor),
    };
}
