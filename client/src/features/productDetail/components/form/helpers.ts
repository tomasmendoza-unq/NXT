import type { ColorRequestDTO } from "../../../color/api/types/color-request";

export const getActiveIndex = (index: number, length: number) =>
    Math.min(index, Math.max(length - 1, 0));

export const toColorOptions = (colors: ColorRequestDTO[]) =>
    colors.map((color, index) => ({
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

export const toSizeOptions = (color: ColorRequestDTO) =>
    color.details.map((detail, detailIndex) => ({
        id: detailIndex,
        size: detail.size,
    }));
