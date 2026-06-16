import {
    defaultDetailRequestDTO,
    type DetailRequestDTO,
} from "../../../productDetail/api/types/detail-request.t";

export interface ColorRequestDTO {
    name: string;
    color: string;
    details: DetailRequestDTO[];
    image: string;
    gallery: string[];
}

export const defaultColorRequestDTO: ColorRequestDTO = {
    name: "",
    color: "#000000",
    details: [defaultDetailRequestDTO],
    image: "",
    gallery: [],
};
