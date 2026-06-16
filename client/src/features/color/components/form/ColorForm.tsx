import { DynamicList } from "../../../../shared/components/dynamicList/DynamicList";
import { FormField } from "../../../../shared/components/formField/FormField";
import {
    defaultColorRequestDTO,
    type ColorRequestDTO,
} from "../../api/types/color-request";
import { colorInputs } from "./inputs";

type Props = {
    colors: ColorRequestDTO[];
    onChange: (colors: ColorRequestDTO[]) => void;
};

export const ColorForm = ({ colors, onChange }: Props) => (
    <DynamicList
        items={colors}
        onChange={onChange}
        defaultItem={defaultColorRequestDTO}
        addLabel="+ Agregar color"
        renderItem={(color, _, handleChange) => (
            <div className="color-form-item">
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
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )}
    />
);
