import type { FacturationForm } from "../../../types/FacturationForm.t";
import { FormField } from "../formField/FormField";
import { inputs } from "./inputs";
import "./style/FormFacturation.css";

type Props = {
    formData: FacturationForm;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
};

export const FormFacturation = ({ formData, onChange }: Props) => {
    return (
        <form className="form-facturation">
            <h1>Detalles de facturación</h1>

            {inputs.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="form-row"
                >
                    {row.map((input) => (
                        <div
                            key={input.name}
                            className="form-facturation-field"
                        >
                            <FormField
                                input={input}
                                formData={formData}
                                onChange={onChange}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </form>
    );
};
