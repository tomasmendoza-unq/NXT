import type { FacturationForm } from "../../../types/FacturationForm.t";

export type InputType = "text" | "email" | "tel" | "checkbox" | "textarea";

export interface InputConfig {
    name: keyof FacturationForm;
    label: string;
    type: InputType;
    pattern?: string;
    title?: string;
}

export const inputs: InputConfig[][] = [
    [
        {
            name: "firstName",
            label: "Nombre",
            type: "text",
        },
        {
            name: "lastName",
            label: "Apellido",
            type: "text",
        },
    ],
    [
        {
            name: "address",
            label: "Dirección",
            type: "text",
        },
    ],
    [
        {
            name: "province",
            label: "Provincia",
            type: "text",
        },
        {
            name: "city",
            label: "Localidad",
            type: "text",
        },
        {
            name: "postalCode",
            label: "Código Postal",
            type: "text",
        },
    ],
    [
        {
            name: "phone",
            label: "Teléfono",
            type: "tel",
            pattern: "[0-9]{10}",
            title: "Debe cumplir con el formato de un teléfono",
        },
        {
            name: "email",
            label: "Correo Electrónico",
            type: "email",
            title: "Debe cumplir con el formato de un email",
        },
    ],
    [
        {
            name: "registerUser",
            label: "¿Crear una cuenta?",
            type: "checkbox",
        },
    ],
    [
        {
            name: "notes",
            label: "Notas",
            type: "textarea",
            title: "Notas del pedido (opcional)",
        },
    ],
];
