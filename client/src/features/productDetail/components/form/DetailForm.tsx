import { useState } from "react";
import type { ColorRequestDTO } from "../../../color/api/types/color-request";
import { DetailColorForm } from "./components/DetailColorForm";
import { DetailSelectors } from "./components/DetailSelectors";
import { getActiveIndex } from "./helpers";
import "./style/DetailForm.css";

type Props = {
    colors: ColorRequestDTO[];
    onChange: (colors: ColorRequestDTO[]) => void;
};

export const DetailForm = ({ colors, onChange }: Props) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [samePriceFlags, setSamePriceFlags] = useState<boolean[]>([]);
    const [globalPrices, setGlobalPrices] = useState<number[]>([]);
    const [selectedDetailIndexes, setSelectedDetailIndexes] = useState<
        number[]
    >([]);

    const activeColorIndex = getActiveIndex(selectedColorIndex, colors.length);
    const activeColor = colors[activeColorIndex];

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
            <DetailSelectors
                colors={colors}
                activeColor={activeColor}
                activeColorIndex={activeColorIndex}
                selectedDetailIndex={getSelectedDetailIndex(activeColorIndex)}
                onColorSelect={setSelectedColorIndex}
                onSelectedDetailChange={handleSelectedDetailChange}
            />

            {activeColor && (
                <DetailColorForm
                    key={activeColorIndex}
                    color={activeColor}
                    colorIndex={activeColorIndex}
                    selectedDetailIndex={getSelectedDetailIndex(
                        activeColorIndex,
                    )}
                    samePrice={samePriceFlags[activeColorIndex] ?? false}
                    globalPrice={globalPrices[activeColorIndex] ?? 0}
                    onSelectedDetailChange={handleSelectedDetailChange}
                    onSamePriceToggle={handleSamePriceToggle}
                    onGlobalPriceChange={handleGlobalPriceChange}
                    onDetailsChange={handleDetailChange}
                />
            )}
        </section>
    );
};
