import { useCallback, useState } from "react";
import type { Product } from "../../../shared/types/Product";
import { ApiError } from "../../../core";
import { getAllProducts } from "../services/get-all-products.service";

interface PaginationInfo {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
}

const useGetAllProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [pagination, setPagination] = useState<PaginationInfo | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<ApiError | null>(null);

    const fetch = useCallback(async (page: number = 0, size: number = 5) => {
        try {
            setIsLoading(true);
            setError(null);

            const { products: data, pagination: paginationData } =
                await getAllProducts(page, size);
            setProducts(data);
            setPagination(paginationData);
        } catch (err) {
            if (err instanceof ApiError) {
                setError(err);
            }
            throw err;
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        products,
        pagination,
        isLoading,
        error,
        fetch,
    };
};

export default useGetAllProducts;
