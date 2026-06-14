import api from "../../../core/api/api";
import { adaptProduct } from "../adapters/product.adapter";
import type { Product } from "../../../shared/types/Product";
import type { ProductResponseDTO } from "../api/types/product-response";
import { PRODUCT_ENDPOINTS } from "../api/constants/productEndpoints";

export const getProductById = async (id: number): Promise<Product> => {
    const response = await api.get<ProductResponseDTO>(
        PRODUCT_ENDPOINTS.GET_PRODUCT_BY_ID(id),
    );
    return adaptProduct(response.data);
};
