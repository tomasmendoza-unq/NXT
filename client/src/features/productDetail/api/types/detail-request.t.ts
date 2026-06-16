export interface DetailRequestDTO {
    size: number;
    price: number;
    quantity: number;
}

export const defaultDetailRequestDTO: DetailRequestDTO = {
    size: 0,
    price: 0,

    quantity: 0,
};
