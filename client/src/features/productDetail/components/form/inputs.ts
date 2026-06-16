import type { InputConfig } from "../../../../shared/types/InputForm.t";

export const detailInputs: InputConfig[][] = [
    [
        {
            name: "size",
            label: "Talle",
            type: "number",
            autoComplete: "off",
        },
        {
            name: "price",
            label: "Precio",
            type: "number",
            autoComplete: "off",
        },
    ],
    [
        {
            name: "image",
            label: "Imagen",
            type: "text",
            autoComplete: "off",
        },
        {
            name: "quantity",
            label: "Stock",
            type: "number",
            autoComplete: "off",
        },
    ],
    // [
    //     {
    //         name: "gallery",
    //         label: "Galería",
    //         type: "text",
    //         autoComplete: "off",
    //     },
    // ],
];
