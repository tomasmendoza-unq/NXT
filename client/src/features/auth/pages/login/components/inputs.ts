import type { InputConfig } from "../../../../../shared/components/formField/FormField";
export const inputs: InputConfig[] = [
    {
        name: "email",
        label: "Correo electrónico",
        type: "email",
        autoComplete: "email",
    },
    {
        name: "password",
        label: "Contraseña",
        type: "password",
        autoComplete: "current-password",
    },
];
