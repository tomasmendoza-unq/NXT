import { useState } from "react";
import { FormList } from "../../../../shared/components/form/FormList";
import {
    defaultColorRequestDTO,
    type ColorRequestDTO,
} from "../../api/types/color-request";
import { ColorOptionList } from "../colorList/ColorList";
import { colorInputs } from "./inputs";
import "./style/ColorForm.css";

type Props = {
    colors: ColorRequestDTO[];
    onChange: (colors: ColorRequestDTO[]) => void;
};

export const ColorForm = ({ colors, onChange }: Props) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const activeColorIndex = Math.min(
        selectedColorIndex,
        Math.max(colors.length - 1, 0),
    );
    const colorOptions = colors.map((color, index) => ({
        id: index,
        name: color.name || `Color ${index + 1}`,
        color: color.color,
        image: color.image,
        gallery: color.gallery,
        details: color.details.map((detail, detailIndex) => ({
            id: detailIndex,
            ...detail,
        })),
    }));

    return (
        <section className="color-form">
            {colors.length > 0 && (
                <div className="color-form-selector">
                    <h3>Colores:</h3>
                    <ColorOptionList
                        colors={colorOptions}
                        selectedColorId={activeColorIndex}
                        onSelect={(color) => setSelectedColorIndex(color.id)}
                    />
                </div>
            )}

            <FormList<ColorRequestDTO>
                items={colors}
                onChange={onChange}
                defaultItem={defaultColorRequestDTO}
                inputs={colorInputs}
                addLabel="+ Agregar color"
                idPrefix="color"
                selectedIndex={activeColorIndex}
                onSelectedIndexChange={setSelectedColorIndex}
            />
        </section>
    );
};
