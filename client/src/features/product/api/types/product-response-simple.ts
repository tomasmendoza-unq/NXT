import type { BrandResponseDTO } from "../../../brand/api/types/brand-response";

export interface ProductResponseSimple {
    id: number;
    model: string;
    brand: BrandResponseDTO;
}

export interface ProductDetailsResponseSimpleDTO {
    id: number;
    size: number;
    price: number;
}

export interface ColorResponseSimpleDTO {
    id: number;
    name: string;
    color: string;
    image: string;
}
