import type {
    ColorResponseSimpleDTO,
    ProductDetailsResponseSimpleDTO,
    ProductResponseSimple,
} from "../../../product/api/types/product-response-simple";

export interface ItemPreviewResponseDTO {
    product: ProductResponseSimple;
    quantity: number;
    color: ColorResponseSimpleDTO;
    subTotal: number;
    detail: ProductDetailsResponseSimpleDTO;
}
