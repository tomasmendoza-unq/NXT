import type { ProductProps } from "../../../shared/types/Product";
import type {
    ProductDetails,
    ProductSizeOption,
    ProductVariant,
} from "../../../shared/types/ProductDetails";
import type { BrandProps } from "../../../shared/types/Brand";
import type { ColorProps } from "../../../shared/types/Color";

interface BackendColor {
    id: number;
    name: string;
    color: string;
}

interface BackendProductSize {
    id: number;
    size: number;
    price: number;
    quantity: number;
}

interface BackendProductVariant {
    color: BackendColor;
    image: string;
    sizes: BackendProductSize[];
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
    variants: BackendProductVariant[];
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

function adaptProductSize(size: BackendProductSize): ProductSizeOption {
    return {
        id: size.id,
        size: size.size,
        price: size.price,
        quantity: size.quantity,
    };
}

function adaptProductVariant(variant: BackendProductVariant): ProductVariant {
    return {
        color: adaptColor(variant.color),
        image: variant.image,
        sizes: variant.sizes.map(adaptProductSize),
    };
}

function adaptProductDetails(variants: ProductVariant[]): ProductDetails[] {
    return variants.flatMap((variant) =>
        variant.sizes.map((size) => ({
            ...size,
            color: variant.color,
            image: variant.image,
        })),
    );
}

function adaptBrand(brand: BackendBrand): BrandProps {
    return {
        name: brand.name,
        image: brand.logo,
    };
}

export function adaptProduct(product: BackendProduct): ProductProps {
    const productVariants = product.variants.map(adaptProductVariant);
    const productDetails = adaptProductDetails(productVariants);

    return {
        id: product.id,
        image: productVariants[0]?.image ?? "",
        name: product.name,
        productModel: product.model,
        productDetails,
        productVariants,
        productBrand: adaptBrand(product.brand),
    };
}
