import type { FacturationForm } from "../../../types/FacturationForm.t";
import { inputs } from "./inputs";
import "./style/FormFacturation.css";

export const FormFacturation = ({
    formData,
    onChange,
}: {
    formData: FacturationForm;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
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
                            <label htmlFor={input.name}>{input.label}</label>
                            <input
                                id={input.name}
                                name={input.name}
                                type={input.type}
                                value={
                                    formData[
                                        input.name as keyof FacturationForm
                                    ]
                                }
                                onChange={onChange}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </form>
    );
};
