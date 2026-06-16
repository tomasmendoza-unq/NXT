import {
    defaultColorRequestDTO,
    type ColorRequestDTO,
} from "../../../color/api/types/color-request";

export interface ProductRequestDTO {
    model: string;
    brandId: number;
    colors: ColorRequestDTO[];
}

export const defaultProductRequestDTO: ProductRequestDTO = {
    model: "",
    brandId: 0,
    colors: [defaultColorRequestDTO],
};
