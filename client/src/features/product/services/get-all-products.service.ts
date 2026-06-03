import api from "../../../core/api/api";
import type { PageResponseDTO } from "../../../core/api/types/PageResponseDTO.t";
import type { Product } from "../../../shared/types/Product";
import { adaptProduct } from "../adapters/product.adapter";
import type { ProductResponseDTO } from "../api/types";

async function getAllProducts(
    page: number = 0,
    size: number = 5,
): Promise<{
    products: Product[];
    pagination: Omit<PageResponseDTO<never>, "content">;
}> {
    const response = await api.get<PageResponseDTO<ProductResponseDTO>>(
        "/product",
        {
            params: { page, size },
        },
    );

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
