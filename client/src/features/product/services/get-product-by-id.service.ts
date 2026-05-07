import api from "../../../core/api/api";
import { adaptProduct, type BackendProduct } from "../adapters/product.adapter";
import type { ProductProps } from "../../../shared/types/Product";

async function getProductById(id: number): Promise<ProductProps> {
    const response = await api.get<BackendProduct>(`/product/${id}`);
    return adaptProduct(response.data);
}

export default getProductById;
