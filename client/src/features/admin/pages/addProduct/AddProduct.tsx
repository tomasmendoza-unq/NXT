import { useState } from "react";
import { Stager } from "../../../../shared/components/stager/Stager";
import { getSteps } from "./steps";

import "./style/AddProduct.css";
import { PreviewProduct } from "../../../product/components/preview/PreviewProduct";
import {
    defaultProductRequestDTO,
    type ProductRequestDTO,
} from "../../../product/api/types/product-request";

export const AddProduct = () => {
    const [current, setCurrent] = useState(0);
    const [productData, setProductData] = useState<ProductRequestDTO>(
        defaultProductRequestDTO,
    );

    const steps = getSteps({ productData, setProductData });

    return (
        <section className="add-product-container">
            <h1>Crear Producto</h1>
            <Stager
                steps={steps}
                currentStep={current}
                setCurrentStep={setCurrent}
            />
            {steps[current].component}
            <PreviewProduct />
        </section>
    );
};
