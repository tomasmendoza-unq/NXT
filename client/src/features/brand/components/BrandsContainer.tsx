import type { BrandProps } from "../../../shared/types/Brand";
import { SubSections } from "../../../shared/layouts/main/components/titleContainer/SubSections";
import { BrandsGrid } from "./BrandGrid";

export const BrandsContainer = ({ brands }: { brands: BrandProps[] }) => {
    return (
        <SubSections subTitle="Marcas">
            <BrandsGrid brands={brands} />
        </SubSections>
    );
};
