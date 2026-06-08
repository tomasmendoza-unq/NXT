export const inputs = [
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
];
