import type { ProductRequestDTO } from "../../api/types/product-request";
import { productBasicInputs } from "./inputs";
import { FormField } from "../../../../shared/components/formField/FormField";
import "./style/ProductForm.css";

type Props = {
    data: ProductRequestDTO;
    onChange: (data: ProductRequestDTO) => void;
};

export const ProductForm = ({ data, onChange }: Props) => {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    return (
        <div className="product-form">
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
                                formData={data}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
