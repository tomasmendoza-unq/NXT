import api from "../../../../core/api/api";
import { PRODUCT_PATH } from "../../../../core/routes/routes";
import type { ProductProps } from "../../../../shared/types/Product";

async function getAllProductsService(): Promise<ProductProps[]> {
    const response = await api.get(`${PRODUCT_PATH}`);
    return response.data;
}

export default getAllProductsService;
