import { useState } from "react";
import type { ProductRequestDTO } from "../../api/types/product-request";
import { productBasicInputs } from "./inputs";
import { FormField } from "../../../../shared/components/formField/FormField";
import "./style/ProductForm.css";

export const ProductForm = () => {
    const [formData, setFormData] = useState<ProductRequestDTO>({
        name: "",
        model: "",
        brandId: 0,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form
            className="product-form"
            onSubmit={handleSubmit}
        >
            {productBasicInputs.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="form-row"
                >
                    {row.map((input) => (
                        <div
                            key={input.name}
                            className="form-field"
                        >
                            <FormField
                                input={input}
                                formData={formData}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
            ))}
            <button
                type="submit"
                className="submit"
            >
                Crear producto
            </button>
        </form>
    );
};
