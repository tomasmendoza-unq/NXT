import { useState } from "react";
import { Stager } from "../../../../shared/components/stager/Stager";
import { getSteps } from "./steps";
import "./style/AddProduct.css";
import {
    defaultProductRequestDTO,
    type ProductRequestDTO,
} from "../../../product/api/types/product-request";
import { PreviewProduct } from "../../../product/components/preview/PreviewProduct";

export const AddProduct = () => {
    const [current, setCurrent] = useState(0);
    const [productData, setProductData] = useState<ProductRequestDTO>(
        defaultProductRequestDTO,
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(productData);
    };

    const steps = getSteps({ productData, setProductData });

    return (
        <section className="add-product-container">
            <h1>Crear Producto</h1>
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
                    >
                        Crear producto
                    </button>
                )}
            </form>
            <PreviewProduct product={productData} />
        </section>
    );
};
