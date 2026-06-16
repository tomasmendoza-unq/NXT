import type { Stager } from "../../../../shared/types/Stager.t";
import type { ProductRequestDTO } from "../../../product/api/types/product-request";
import { ProductForm } from "../../../product/components/form/ProductForm";
import { ColorForm } from "../../../color/components/ColorForm";
import { DetailForm } from "../../../productDetail/components/DetailForm";

type StepsProps = {
    productData: ProductRequestDTO;
    setProductData: (data: ProductRequestDTO) => void;
};

export const getSteps = ({
    productData,
    setProductData,
}: StepsProps): Stager[] => [
    {
        index: 0,
        title: "Información básica",
        component: (
            <ProductForm
                data={productData}
                onChange={setProductData}
            />
        ),
    },
    {
        index: 1,
        title: "Colores",
        component: (
            <ColorForm
                colors={productData.colors}
                onChange={(colors) =>
                    setProductData({ ...productData, colors })
                }
            />
        ),
    },
    {
        index: 2,
        title: "Detalles",
        component: (
            <DetailForm
                colors={productData.colors}
                onChange={(colors) =>
                    setProductData({ ...productData, colors })
                }
            />
        ),
    },
];
