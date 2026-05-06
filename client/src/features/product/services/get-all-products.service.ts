import api from "../../../core/api/api";
import {
    adaptProduct,
    type PageResponse,
    type BackendProduct,
} from "../adapters/product.adapter";
import type { ProductProps } from "../../../shared/types/Product";

async function getAllProducts(
    page: number = 0,
    size: number = 5,
): Promise<{
    products: ProductProps[];
    pagination: Omit<PageResponse<never>, "content">;
}> {
    const response = await api.get<PageResponse<BackendProduct>>("/product", {
        params: { page, size },
    });

    const products = response.data.content.map(adaptProduct);
    const pagination = {
        page: response.data.page,
        size: response.data.size,
        totalElements: response.data.totalElements,
        totalPages: response.data.totalPages,
        last: response.data.last,
    };

    return { products, pagination };
}

export default getAllProducts;
