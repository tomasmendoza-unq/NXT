import type { BrandProps } from "../../../shared/types/Brand";
import type { BrandResponseDTO } from "../api/types/brand-response";

export function adaptBrand(brand: BrandResponseDTO): BrandProps {
    return {
        name: brand.name,
        image: brand.logo,
    };
}
