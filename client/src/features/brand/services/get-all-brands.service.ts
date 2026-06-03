import api from "../../../core/api/api";
import { adaptBrand } from "../adapters/brand.adapter";
import type { BrandProps } from "../../../shared/types/Brand";
import type { BrandResponseDTO } from "../api/types/brand-response";
import { BRAND_ENDPOINTS } from "../api/constants/brandEndpoints";

export const getAllBrands = async (): Promise<BrandProps[]> => {
    const response = await api.get<BrandResponseDTO[]>(
        BRAND_ENDPOINTS.GET_BRANDS,
    );
    return response.data.map(adaptBrand);
};
