import { useCallback, useState } from "react";
import getProductById from "../services/get-product-by-id.service";
import type { ProductProps } from "../../../shared/types/Product";
import { ApiError } from "../../../core";

const useGetProductById = () => {
    const [product, setProduct] = useState<ProductProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<ApiError | null>(null);

    const fetch = useCallback(async (id: number) => {
        try {
            setIsLoading(true);
            setError(null);

            const data = await getProductById(id);
            setProduct(data);
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
        product,
        isLoading,
        error,
        fetch,
    };
};

export default useGetProductById;
