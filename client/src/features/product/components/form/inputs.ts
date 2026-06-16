import type { InputConfig } from "../../../../shared/types/InputForm.t";

export const productBasicInputs: InputConfig[] = [
    {
        name: "name",
        label: "Nombre",
        type: "text",
        autoComplete: "off",
    },
    {
        name: "model",
        label: "Modelo",
        type: "text",
        autoComplete: "off",
    },
    {
        name: "brandId",
        label: "Marca",
        type: "number",
        autoComplete: "off",
    },
];
