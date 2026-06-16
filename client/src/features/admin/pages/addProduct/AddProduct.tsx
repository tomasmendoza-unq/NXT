import { useState } from "react";
import { Stager } from "../../../../shared/components/stager/Stager";
import { getSteps } from "./steps";
import "./style/AddProduct.css";
import {
    defaultProductRequestDTO,
    type ProductRequestDTO,
} from "../../../product/api/types/product-request";
import { PreviewProduct } from "../../../product/components/preview/PreviewProduct";
import { useCreateProduct } from "../../hooks/use-create-product";

export const AddProduct = () => {
    const [current, setCurrent] = useState(0);
    const [productData, setProductData] = useState<ProductRequestDTO>(
        defaultProductRequestDTO,
    );

    const { createProduct, loading } = useCreateProduct();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createProduct(productData);
    };

    const steps = getSteps({ productData, setProductData });

    return (
        <section className="add-product-container">
            <h1>Crear Producto</h1>

            <div className="add-product-content">
                <form onSubmit={handleSubmit}>
                    <Stager
                        steps={steps}
                        currentStep={current}
                        setCurrentStep={setCurrent}
                    />

                    {steps[current].component}

                    {current === steps.length - 1 && (
                        <button
                            type="submit"
                            className="submit"
                            disabled={loading}
                        >
                            {loading ? "Creando producto..." : "Crear producto"}
                        </button>
                    )}
                </form>

                <PreviewProduct product={productData} />
            </div>
        </section>
    );
};
