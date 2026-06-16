import type { Stager } from "../../../../shared/types/Stager.t";
import { ColorForm } from "../../../color/components/ColorForm";
import { ProductForm } from "../../../product/components/form/ProductForm";
import { DetailForm } from "../../../productDetail/components/DetailForm";

export const steps: Stager[] = [
    { index: 0, title: "Información básica", component: <ProductForm /> },
    { index: 1, title: "Informacion de los colores", component: <ColorForm /> },
    {
        index: 2,
        title: "Informacion de los detalles",
        component: <DetailForm />,
    },
];
