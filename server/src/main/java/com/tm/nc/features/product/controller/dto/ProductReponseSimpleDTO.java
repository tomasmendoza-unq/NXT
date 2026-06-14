package com.tm.nc.features.product.controller.dto;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.brand.controller.dto.BrandResponseDTO;
import com.tm.nc.features.color.controller.dto.ColorResponseDTO;

import java.util.List;

public record ProductReponseSimpleDTO(
        Long  id,
        String name,
        String model,
        BrandResponseDTO brand
) {
    public static ProductReponseSimpleDTO fromModel(Product product) {
        return new ProductReponseSimpleDTO(
                product.getId(),
                product.getName(),
                product.getModel(),
                BrandResponseDTO.fromModel(product.getBrand())
        );
    }
}
