import type { ColorRequestDTO } from "../../../../color/api/types/color-request";
import { SizeOptionList } from "../../detailList/DetailList";
import { getActiveIndex, toSizeOptions } from "../helpers";

type Props = {
    color: ColorRequestDTO;
    colorIndex: number;
    selectedDetailIndex: number;
    onSelectedDetailChange: (colorIndex: number, detailIndex: number) => void;
};

export const DetailSizeSelector = ({
    color,
    colorIndex,
    selectedDetailIndex,
    onSelectedDetailChange,
}: Props) => {
    const activeDetailIndex = getActiveIndex(
        selectedDetailIndex,
        color.details.length,
    );

    if (color.details.length === 0) return null;

    return (
        <div className="detail-form-size-selector">
            <h4>Talle: {color.details[activeDetailIndex]?.size ?? 0}</h4>
            <SizeOptionList
                sizes={toSizeOptions(color)}
                selectedSizeId={activeDetailIndex}
                onSelect={(size) =>
                    onSelectedDetailChange(colorIndex, size.id)
                }
            />
        </div>
    );
};
