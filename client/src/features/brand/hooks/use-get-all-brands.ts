import { useState } from "react";
import getAllBrands from "../services/get-all-brands.service";
import type { BrandProps } from "../../../shared/types/Brand";
import { ApiError } from "../../../core";

const useGetAllBrands = () => {
    const [brands, setBrands] = useState<BrandProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<ApiError | null>(null);

    const fetch = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const data = await getAllBrands();
            setBrands(data);
        } catch (err) {
            if (err instanceof ApiError) {
                setError(err);
            }
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        brands,
        isLoading,
        error,
        fetch,
    };
};

export default useGetAllBrands;
