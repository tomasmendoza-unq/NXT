import { SubSections } from "../../../shared/layouts/main/components/subSections/SubSections";
import type { BrandProps } from "../../../shared/types/Brand";
import { BrandsGrid } from "./BrandGrid";

export const BrandsContainer = ({ brands }: { brands: BrandProps[] }) => {
    return (
        <SubSections subTitle="Marcas">
            <BrandsGrid brands={brands} />
        </SubSections>
    );
};
