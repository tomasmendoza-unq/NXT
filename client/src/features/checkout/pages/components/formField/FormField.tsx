import type { FacturationForm } from "../../../types/FacturationForm.t";
import type { InputConfig } from "../formFacturation/inputs";
import "./style/FormField.css";

type Props = {
    input: InputConfig;
    formData: FacturationForm;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
};

export const FormField = ({ input, formData, onChange }: Props) => {
    if (input.type === "checkbox") {
        return (
            <div className="checkbox-field">
                <input
                    id={input.name}
                    name={input.name}
                    type="checkbox"
                    checked={Boolean(
                        formData[input.name as keyof FacturationForm],
                    )}
                    onChange={onChange}
                />
                <label htmlFor={input.name}>{input.label}</label>
            </div>
        );
    }

    if (input.type === "textarea") {
        return (
            <>
                <label htmlFor={input.name}>{input.label}</label>

                <textarea
                    id={input.name}
                    name={input.name}
                    value={
                        formData[input.name as keyof FacturationForm] as string
                    }
                    onChange={onChange}
                />
            </>
        );
    }

    return (
        <>
            <label htmlFor={input.name}>{input.label}</label>

            <input
                id={input.name}
                name={input.name}
                required
                type={input.type}
                value={formData[input.name as keyof FacturationForm] as string}
                onChange={onChange}
            />
        </>
    );
};
