import { api } from "../../../core";
import type { Product } from "../../../shared/types/Product";
import { adaptProduct } from "../../product/adapters/product.adapter";
import type { ProductRequestDTO } from "../../product/api/types/product-request";
import type { ProductResponseDTO } from "../../product/api/types/product-response";
import { ADMIN_ENDPOINTS } from "../api/adminEndpoints";

export const createProductService = async ({
    request,
}: {
    request: ProductRequestDTO;
}): Promise<Product> => {
    const response = await api.post<ProductResponseDTO>(
        ADMIN_ENDPOINTS.POST_PRODUCTS,
        request,
    );
    return adaptProduct(response.data);
};
