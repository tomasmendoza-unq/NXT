import type { BrandResponseDTO } from "../../../brand/api/types/brand-response";

export interface ProductDetailsResponseDTO {
    id: number;
    size: number;
    price: number;
    quantity: number;
}

export interface ColorResponseDTO {
    id: number;
    name: string;
    color: string;
    gallery: string[];
    image: string;
    variants: ProductDetailsResponseDTO[];
}

export interface ProductResponseDTO {
    id: number;
    name: string;
    model: string;
    colors: ColorResponseDTO[];
    brand: BrandResponseDTO;
}
