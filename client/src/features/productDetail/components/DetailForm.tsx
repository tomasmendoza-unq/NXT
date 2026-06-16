import { FormField } from "../../../shared/components/formField/FormField";
import { type ColorRequestDTO } from "../../color/api/types/color-request";
import { defaultDetailRequestDTO } from "../api/types/detail-request.t";
import { detailInputs } from "./inputs";

type Props = {
    colors: ColorRequestDTO[];
    onChange: (colors: ColorRequestDTO[]) => void;
};

export const DetailForm = ({ colors, onChange }: Props) => {
    const handleChange = (
        colorIndex: number,
        detailIndex: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        const updated = colors.map((c, ci) =>
            ci === colorIndex
                ? {
                      ...c,
                      details: c.details.map((d, di) =>
                          di === detailIndex ? { ...d, [name]: value } : d,
                      ),
                  }
                : c,
        );
        onChange(updated);
    };

    const handleAddDetail = (colorIndex: number) => {
        const updated = colors.map((c, ci) =>
            ci === colorIndex
                ? {
                      ...c,
                      details: [...c.details, { ...defaultDetailRequestDTO }],
                  }
                : c,
        );
        onChange(updated);
    };

    const handleRemoveDetail = (colorIndex: number, detailIndex: number) => {
        const updated = colors.map((c, ci) =>
            ci === colorIndex
                ? {
                      ...c,
                      details: c.details.filter((_, di) => di !== detailIndex),
                  }
                : c,
        );
        onChange(updated);
    };

    return (
        <div className="detail-form">
            {colors.map((color, colorIndex) => (
                <div
                    key={colorIndex}
                    className="detail-form-color"
                >
                    <h3>{color.name || `Color ${colorIndex + 1}`}</h3>
                    {color.details.map((detail, detailIndex) => (
                        <div
                            key={detailIndex}
                            className="detail-form-item"
                        >
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
                                                onChange={(e) =>
                                                    handleChange(
                                                        colorIndex,
                                                        detailIndex,
                                                        e,
                                                    )
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() =>
                                    handleRemoveDetail(colorIndex, detailIndex)
                                }
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => handleAddDetail(colorIndex)}
                    >
                        + Agregar talle
                    </button>
                </div>
            ))}
        </div>
    );
};
