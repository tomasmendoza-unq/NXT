import { useState } from "react";
import { Stager } from "../../../../shared/components/stager/Stager";
import { steps } from "./steps";

import "./style/AddProduct.css";
import { PreviewProduct } from "../../../product/components/preview/PreviewProduct";

export const AddProduct = () => {
    const [current, setCurrent] = useState(0);
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
