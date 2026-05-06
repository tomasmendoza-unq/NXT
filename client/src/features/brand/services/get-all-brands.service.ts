import api from "../../../core/api/api";
import { adaptBrand, type BackendBrand } from "../adapters/brand.adapter";
import type { BrandProps } from "../../../shared/types/Brand";

async function getAllBrands(): Promise<BrandProps[]> {
    const response = await api.get<BackendBrand[]>("/brand");
    return response.data.map(adaptBrand);
}

export default getAllBrands;
