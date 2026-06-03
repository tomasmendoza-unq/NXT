import type { ProductDetailsResponseDTO } from "./ProductDetailsResponseDTO.t";

export interface ColorResponseDTO {
    id: number;
    name: string;
    color: string;
    variants: ProductDetailsResponseDTO[];
}
