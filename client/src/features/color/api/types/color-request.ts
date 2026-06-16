import type { DetailRequestDTO } from "../../../productDetail/api/types/detail-request.t";

export interface ColorRequestDTO {
    name: string;
    color: string;
    details: DetailRequestDTO[];
}

export const defaultColorRequestDTO: ColorRequestDTO = {
    name: "",
    color: "",
    details: [],
};
