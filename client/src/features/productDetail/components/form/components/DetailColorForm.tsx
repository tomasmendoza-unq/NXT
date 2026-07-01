import { FormList } from "../../../../../shared/components/form/FormList";
import type { ColorRequestDTO } from "../../../../color/api/types/color-request";
import { defaultDetailRequestDTO } from "../../../api/types/detail-request.t";
import { detailInputs } from "../inputs";
import { getActiveIndex } from "../helpers";

type Props = {
    color: ColorRequestDTO;
    colorIndex: number;
    selectedDetailIndex: number;
    samePrice: boolean;
    globalPrice: number;
    onSelectedDetailChange: (colorIndex: number, detailIndex: number) => void;
    onSamePriceToggle: (colorIndex: number, checked: boolean) => void;
    onGlobalPriceChange: (colorIndex: number, price: number) => void;
    onDetailsChange: (
        colorIndex: number,
        details: ColorRequestDTO["details"],
    ) => void;
};

export const DetailColorForm = ({
    color,
    colorIndex,
    selectedDetailIndex,
    samePrice,
    globalPrice,
    onSelectedDetailChange,
    onSamePriceToggle,
    onGlobalPriceChange,
    onDetailsChange,
}: Props) => {
    const activeDetailIndex = getActiveIndex(
        selectedDetailIndex,
        color.details.length,
    );

    return (
        <div className="detail-form-color">
            <div className="detail-form-price-toggle">
                <label>
                    <input
                        type="checkbox"
                        checked={samePrice}
                        onChange={(e) =>
                            onSamePriceToggle(colorIndex, e.target.checked)
                        }
                    />
                    Mismo precio para todos los talles
                </label>

                {samePrice && (
                    <input
                        type="number"
                        min={0}
                        value={globalPrice}
                        onChange={(e) =>
                            onGlobalPriceChange(
                                colorIndex,
                                Number(e.target.value),
                            )
                        }
                        placeholder="Precio global"
                    />
                )}
            </div>

            <FormList
                items={color.details}
                onChange={(details) => {
                    const updatedDetails = samePrice
                        ? details.map((detail) => ({
                              ...detail,
                              price: globalPrice,
                          }))
                        : details;
                    onDetailsChange(colorIndex, updatedDetails);
                }}
                defaultItem={defaultDetailRequestDTO}
                inputs={detailInputs.flat()}
                addLabel="+ Agregar talle"
                idPrefix={`detail-${colorIndex}`}
                selectedIndex={activeDetailIndex}
                onSelectedIndexChange={(detailIndex) =>
                    onSelectedDetailChange(colorIndex, detailIndex)
                }
            />
        </div>
    );
};
