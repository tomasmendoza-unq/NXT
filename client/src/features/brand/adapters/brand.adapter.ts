import type { BrandProps } from "../../../shared/types/Brand";

export interface BackendBrand {
    id: number;
    name: string;
    logo: string;
}

export function adaptBrand(brand: BackendBrand): BrandProps {
    return {
        name: brand.name,
        image: brand.logo,
    };
}
