import type {
    Product,
    Color,
    ProductDetails,
} from "../../../shared/types/Product";
import type {
    ProductResponseDTO,
    ColorResponseDTO,
    ProductDetailsResponseDTO,
} from "../api/types";
import { adaptBrand } from "../../brand/adapters/brand.adapter";

function adaptProductDetail(detail: ProductDetailsResponseDTO): ProductDetails {
    return {
        id: detail.id,
        size: detail.size,
        price: detail.price,
        image: detail.image,
        quantity: detail.quantity,
    };
}

function adaptColor(color: ColorResponseDTO): Color {
    return {
        id: color.id,
        name: color.name,
        color: color.color,
        details: color.variants.map(adaptProductDetail),
    };
}

export function adaptProduct(product: ProductResponseDTO): Product {
    return {
        id: product.id,
        name: product.name,
        model: product.model,
        brand: adaptBrand(product.brand),
        colors: product.colors.map(adaptColor),
    };
}
