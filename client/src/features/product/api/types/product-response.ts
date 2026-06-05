import type { BrandResponseDTO } from "../../../brand/api/types/brand-response";

export interface ProductDetailsResponseDTO {
    id: number;
    size: number;
    price: number;
    image: string;
    quantity: number;
    gallery: string[];
}

export interface ColorResponseDTO {
    id: number;
    name: string;
    color: string;
    variants: ProductDetailsResponseDTO[];
}

export interface ProductResponseDTO {
    id: number;
    name: string;
    model: string;
    colors: ColorResponseDTO[];
    brand: BrandResponseDTO;
}
