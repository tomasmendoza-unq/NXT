import { FormList } from "../../../../shared/components/form/FormList";
import type { ColorRequestDTO } from "../../../color/api/types/color-request";
import { defaultDetailRequestDTO } from "../../api/types/detail-request.t";
import { detailInputs } from "./inputs";

type Props = {
    colors: ColorRequestDTO[];
    onChange: (colors: ColorRequestDTO[]) => void;
};

export const DetailForm = ({ colors, onChange }: Props) => {
    const handleDetailChange = (
        colorIndex: number,
        details: ColorRequestDTO["details"],
    ) => {
        onChange(
            colors.map((color, index) =>
                index === colorIndex ? { ...color, details } : color,
            ),
        );
    };

    return (
        <div className="detail-form">
            {colors.map((color, colorIndex) => (
                <div
                    key={colorIndex}
                    className="detail-form-color"
                >
                    <h3>{color.name || `Color ${colorIndex + 1}`}</h3>

                    <FormList
                        items={color.details}
                        onChange={(details) =>
                            handleDetailChange(colorIndex, details)
                        }
                        defaultItem={defaultDetailRequestDTO}
                        inputs={detailInputs.flat()}
                        addLabel="+ Agregar talle"
                    />
                </div>
            ))}
        </div>
    );
};
