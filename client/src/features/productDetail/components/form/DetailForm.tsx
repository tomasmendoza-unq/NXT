import { useState } from "react";
import { FormList } from "../../../../shared/components/form/FormList";
import type { ColorRequestDTO } from "../../../color/api/types/color-request";
import { defaultDetailRequestDTO } from "../../api/types/detail-request.t";
import { SizeOptionList } from "../detailList/DetailList";
import { detailInputs } from "./inputs";
import "./style/DetailForm.css";

type Props = {
    colors: ColorRequestDTO[];
    onChange: (colors: ColorRequestDTO[]) => void;
};

export const DetailForm = ({ colors, onChange }: Props) => {
    const [samePriceFlags, setSamePriceFlags] = useState<boolean[]>([]);
    const [globalPrices, setGlobalPrices] = useState<number[]>([]);
    const [selectedDetailIndexes, setSelectedDetailIndexes] = useState<
        number[]
    >([]);

    const getSelectedDetailIndex = (colorIndex: number) =>
        selectedDetailIndexes[colorIndex] ?? 0;

    const handleSelectedDetailChange = (
        colorIndex: number,
        detailIndex: number,
    ) => {
        setSelectedDetailIndexes((prev) => {
            const next = [...prev];
            next[colorIndex] = detailIndex;
            return next;
        });
    };

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

    const handleSamePriceToggle = (colorIndex: number, checked: boolean) => {
        setSamePriceFlags((prev) => {
            const next = [...prev];
            next[colorIndex] = checked;
            return next;
        });

        if (checked) {
            const price =
                globalPrices[colorIndex] ??
                colors[colorIndex]?.details[0]?.price ??
                0;

            setGlobalPrices((prev) => {
                const next = [...prev];
                next[colorIndex] = price;
                return next;
            });

            applyGlobalPrice(colorIndex, price);
        }
    };

    const handleGlobalPriceChange = (colorIndex: number, price: number) => {
        setGlobalPrices((prev) => {
            const next = [...prev];
            next[colorIndex] = price;
            return next;
        });
        applyGlobalPrice(colorIndex, price);
    };

    const applyGlobalPrice = (colorIndex: number, price: number) => {
        const color = colors[colorIndex];
        if (!color) return;

        const updatedDetails = color.details.map((detail) => ({
            ...detail,
            price,
        }));
        handleDetailChange(colorIndex, updatedDetails);
    };

    return (
        <section className="detail-form">
            {colors.map((color, colorIndex) => (
                <DetailColorForm
                    key={colorIndex}
                    color={color}
                    colorIndex={colorIndex}
                    selectedDetailIndex={getSelectedDetailIndex(colorIndex)}
                    samePrice={samePriceFlags[colorIndex] ?? false}
                    globalPrice={globalPrices[colorIndex] ?? 0}
                    onSelectedDetailChange={handleSelectedDetailChange}
                    onSamePriceToggle={handleSamePriceToggle}
                    onGlobalPriceChange={handleGlobalPriceChange}
                    onDetailsChange={handleDetailChange}
                />
            ))}
        </section>
    );
};

type DetailColorFormProps = {
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

const DetailColorForm = ({
    color,
    colorIndex,
    selectedDetailIndex,
    samePrice,
    globalPrice,
    onSelectedDetailChange,
    onSamePriceToggle,
    onGlobalPriceChange,
    onDetailsChange,
}: DetailColorFormProps) => {
    const activeDetailIndex = Math.min(
        selectedDetailIndex,
        Math.max(color.details.length - 1, 0),
    );
    const sizeOptions = color.details.map((detail, detailIndex) => ({
        id: detailIndex,
        size: detail.size,
    }));

    return (
        <div className="detail-form-color">
            <h3>{color.name || `Color ${colorIndex + 1}`}</h3>

            {color.details.length > 0 && (
                <div className="detail-form-size-selector">
                    <h4>Talle: {color.details[activeDetailIndex]?.size ?? 0}</h4>
                    <SizeOptionList
                        sizes={sizeOptions}
                        selectedSizeId={activeDetailIndex}
                        onSelect={(size) =>
                            onSelectedDetailChange(colorIndex, size.id)
                        }
                    />
                </div>
            )}

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
                        ? details.map((d) => ({ ...d, price: globalPrice }))
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
