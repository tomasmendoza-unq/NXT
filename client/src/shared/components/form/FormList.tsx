import { FormField } from "../formField/FormField";
import type { InputConfig } from "../../types/InputForm.t";
import "./style/FormList.css";

type Props<T extends object> = {
    items: T[];
    onChange: (items: T[]) => void;
    defaultItem: T;
    inputs: InputConfig[];
    addLabel?: string;
};

export const FormList = <T extends object>({
    items,
    onChange,
    defaultItem,
    inputs,
    addLabel = "+ Agregar",
}: Props<T>) => {
    const handleChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        onChange(
            items.map((item, i) =>
                i === index ? { ...item, [name]: value } : item,
            ),
        );
    };

    const handleAdd = () => onChange([...items, structuredClone(defaultItem)]);

    const handleRemove = (index: number) =>
        onChange(items.filter((_, i) => i !== index));

    return (
        <section className="form-list">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="form-list-item"
                >
                    {inputs.map((input) => (
                        <FormField<T>
                            key={input.name}
                            input={input}
                            formData={item}
                            onChange={(e) => handleChange(index, e)}
                        />
                    ))}

                    <button
                        type="button"
                        onClick={() => handleRemove(index)}
                    >
                        Eliminar
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={handleAdd}
            >
                {addLabel}
            </button>
        </section>
    );
};
