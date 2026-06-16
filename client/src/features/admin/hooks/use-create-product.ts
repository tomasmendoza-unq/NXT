import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ProductRequestDTO } from "../../product/api/types/product-request";
import { createProductService } from "../service/create-product.service";
import { useToast } from "../../toast/hooks/toast/useToast";

export const useCreateProduct = () => {
    const [loading, setLoading] = useState(false);
    const { showToast } = useToast();
    const navigate = useNavigate();

    const createProduct = async (productData: ProductRequestDTO) => {
        try {
            setLoading(true);

            const product = await createProductService({
                request: productData,
            });

            navigate("/products/" + product.id);
            showToast({
                message: "Producto creado exitosamente",
                severity: "success",
            });

            return product;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        createProduct,
    };
};
