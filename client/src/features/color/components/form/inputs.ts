import type { InputConfig } from "../../../../shared/types/InputForm.t";

export const colorInputs: InputConfig[] = [
    {
        name: "name",
        label: "Nombre",
        type: "text",
        autoComplete: "off",
    },
    {
        name: "color",
        label: "Color (hex)",
        type: "color",
    },
    {
        name: "image",
        label: "Imagen",
        type: "text",
        autoComplete: "off",
    },
];
