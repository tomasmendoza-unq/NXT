import type { ProductProps } from "../../../shared/types/Product";
import type { ProductDetails } from "../../../shared/types/ProductDetails";
import type { BrandProps } from "../../../shared/types/Brand";
import type { ColorProps } from "../../../shared/types/Color";

// Tipos del backend (response)
interface BackendColor {
    id: number;
    name: string;
    color: string;
}

interface BackendProductDetail {
    id: number;
    size: number;
    price: number;
    color: BackendColor;
    quantity: number;
    image: string;
}

interface BackendBrand {
    id: number;
    name: string;
    logo: string;
}

export interface BackendProduct {
    id: number;
    name: string;
    model: string;
    details: BackendProductDetail[];
    brand: BackendBrand;
}

export interface PageResponse<T> {
    content: T[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
}

// Adaptadores
function adaptColor(color: BackendColor): ColorProps {
    return {
        id: color.id,
        name: color.name,
        color: color.color,
    };
}

function adaptProductDetail(detail: BackendProductDetail): ProductDetails {
    return {
        id: detail.id,
        size: detail.size,
        price: detail.price,
        color: adaptColor(detail.color),
        quantity: detail.quantity,
        image: detail.image,
    };
}

function adaptBrand(brand: BackendBrand): BrandProps {
    return {
        name: brand.name,
        image: brand.logo,
    };
}

export function adaptProduct(product: BackendProduct): ProductProps {
    return {
        image: "",
        name: product.name,
        productModel: product.model,
        productDetails: product.details.map(adaptProductDetail),
        productBrand: adaptBrand(product.brand),
    };
}
