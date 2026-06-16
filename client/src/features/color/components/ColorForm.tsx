import { FormField } from "../../../shared/components/formField/FormField";
import {
    defaultColorRequestDTO,
    type ColorRequestDTO,
} from "../api/types/color-request";
import { colorInputs } from "./inputs";

type Props = {
    colors: ColorRequestDTO[];
    onChange: (colors: ColorRequestDTO[]) => void;
};

export const ColorForm = ({ colors, onChange }: Props) => {
    const handleChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        const updated = colors.map((c, i) =>
            i === index ? { ...c, [name]: value } : c,
        );
        onChange(updated);
    };

    const handleAdd = () =>
        onChange([...colors, { ...defaultColorRequestDTO }]);
    const handleRemove = (index: number) =>
        onChange(colors.filter((_, i) => i !== index));

    return (
        <div className="color-form">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="color-form-item"
                >
                    {colorInputs.map((row, rowIndex) => (
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
                                        formData={color}
                                        onChange={(e) => handleChange(index, e)}
                                    />
                                </div>
                            ))}
                        </div>
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
                + Agregar color
            </button>
        </div>
    );
};
