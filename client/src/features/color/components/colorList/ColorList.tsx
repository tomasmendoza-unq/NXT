import type { Color } from "../../../../shared/types/Color";
import "./style/ColorList.css";

interface ColorOptionListProps {
    colors: Color[];
    selectedColorId: number;
    onSelect: (color: Color) => void;
}

export const ColorOptionList = ({
    colors,
    selectedColorId,
    onSelect,
}: ColorOptionListProps) => {
    return (
        <div className="product-color-option-list">
            {colors.map((color) => (
                <button
                    key={color.id}
                    className={
                        color.id === selectedColorId
                            ? "product-color-option product-color-option-selected"
                            : "product-color-option"
                    }
                    style={{ backgroundColor: color.color }}
                    type="button"
                    aria-label={color.name}
                    title={color.name}
                    onClick={() => onSelect(color)}
                />
            ))}
        </div>
    );
};
