import api from "../../../core/api/api";
import { adaptProduct } from "../adapters/product.adapter";
import type { Product } from "../../../shared/types/Product";
import type { ProductResponseDTO } from "../api/types";

async function getProductById(id: number): Promise<Product> {
    const response = await api.get<ProductResponseDTO>(`/product/${id}`);
    return adaptProduct(response.data);
}

export default getProductById;
