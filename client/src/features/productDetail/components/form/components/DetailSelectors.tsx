import type { ColorRequestDTO } from "../../../../color/api/types/color-request";
import { ColorOptionList } from "../../../../color/components/colorList/ColorList";
import { toColorOptions } from "../helpers";
import { DetailSizeSelector } from "./DetailSizeSelector";

type Props = {
    colors: ColorRequestDTO[];
    activeColor?: ColorRequestDTO;
    activeColorIndex: number;
    selectedDetailIndex: number;
    onColorSelect: (colorIndex: number) => void;
    onSelectedDetailChange: (colorIndex: number, detailIndex: number) => void;
};

export const DetailSelectors = ({
    colors,
    activeColor,
    activeColorIndex,
    selectedDetailIndex,
    onColorSelect,
    onSelectedDetailChange,
}: Props) => (
    <div className="detail-form-selectors">
        {colors.length > 0 && (
            <div className="detail-form-color-selector">
                <h3>Colores:</h3>
                <ColorOptionList
                    colors={toColorOptions(colors)}
                    selectedColorId={activeColorIndex}
                    onSelect={(color) => onColorSelect(color.id)}
                />
            </div>
        )}

        {activeColor && (
            <DetailSizeSelector
                color={activeColor}
                colorIndex={activeColorIndex}
                selectedDetailIndex={selectedDetailIndex}
                onSelectedDetailChange={onSelectedDetailChange}
            />
        )}
    </div>
);
