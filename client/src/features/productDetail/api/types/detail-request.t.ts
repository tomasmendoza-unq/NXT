export interface DetailRequestDTO {
    size: number;
    price: number;
    image: string;
    gallery: string[];
    quantity: number;
}

export const defaultDetailRequestDTO: DetailRequestDTO = {
    size: 0,
    price: 0,
    image: "",
    gallery: [],
    quantity: 0,
};
