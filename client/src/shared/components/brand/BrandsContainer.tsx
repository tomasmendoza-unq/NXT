import type { BrandProps } from "../../types/Brand";
import { SubSections } from "../general/SubSections";
import { BrandsGrid } from "./BrandGrid";

export const BrandsContainer = ({ brands }: { brands: BrandProps[] }) => {
    return (
        <SubSections subTitle="Marcas">
            <BrandsGrid brands={brands} />
        </SubSections>
    );
};
