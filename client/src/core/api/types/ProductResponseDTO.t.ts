import type { BrandResponseDTO } from "./BrandResponseDTO.t";
import type { ColorResponseDTO } from "./ColorResponseDTO.t";

export interface ProductResponseDTO {
    id: number;
    name: string;
    model: string;
    colors: ColorResponseDTO[];
    brand: BrandResponseDTO;
}
