package com.tm.nc.features.product.controller.dto.response;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.brand.controller.dto.response.BrandResponseDTO;

public record ProductReponseSimpleDTO(
        Long  id,
        String model,
        BrandResponseDTO brand
) {
    public static ProductReponseSimpleDTO fromModel(Product product) {
        return new ProductReponseSimpleDTO(
                product.getId(),
                product.getModel(),
                BrandResponseDTO.fromModel(product.getBrand())
        );
    }
}
