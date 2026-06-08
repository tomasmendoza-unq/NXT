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
            <h2>Detalles de facturación</h2>
            {inputs.map((input) => (
                <div
                    key={input.name}
                    className="form-facturation-field"
                >
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                        id={input.name}
                        name={input.name}
                        type={input.type}
                        pattern={input.pattern}
                        title={input.title}
                        value={formData[input.name as keyof FacturationForm]}
                        onChange={onChange}
                    />
                </div>
            ))}
        </form>
    );
};
