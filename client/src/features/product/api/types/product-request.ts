import type { ColorRequestDTO } from "../../../color/api/types/color-request";

export interface ProductRequestDTO {
    name: string;
    model: string;
    brandId: number;
    colors: ColorRequestDTO[];
}

export const defaultProductRequestDTO: ProductRequestDTO = {
    name: "",
    model: "",
    brandId: 0,
    colors: [],
};
