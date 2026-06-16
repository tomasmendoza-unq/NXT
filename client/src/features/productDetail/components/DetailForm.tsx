import { FormField } from "../../../shared/components/formField/FormField";
import { type ColorRequestDTO } from "../../color/api/types/color-request";
import { defaultDetailRequestDTO } from "../api/types/detail-request.t";
import { detailInputs } from "./inputs";
import { DynamicList } from "../../../shared/components/dynamicList/DynamicList";

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
            colors.map((c, ci) => (ci === colorIndex ? { ...c, details } : c)),
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
                    <DynamicList
                        items={color.details}
                        onChange={(details) =>
                            handleDetailChange(colorIndex, details)
                        }
                        defaultItem={defaultDetailRequestDTO}
                        addLabel="+ Agregar talle"
                        renderItem={(detail, _, handleChange) => (
                            <div className="detail-form-item">
                                {detailInputs.map((row, rowIndex) => (
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
                                                    formData={detail}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    />
                </div>
            ))}
        </div>
    );
};
