import api from "../../../core/api/api";
import { adaptBrand } from "../adapters/brand.adapter";
import type { BrandProps } from "../../../shared/types/Brand";
import type { BrandResponseDTO } from "../api/types";

async function getAllBrands(): Promise<BrandProps[]> {
    const response = await api.get<BrandResponseDTO[]>("/brand");
    return response.data.map(adaptBrand);
}

export default getAllBrands;
