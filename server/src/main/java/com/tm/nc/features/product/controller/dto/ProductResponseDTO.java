package com.tm.nc.features.product.controller.dto;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.brand.controller.dto.BrandResponseDTO;

import java.util.List;

public record ProductResponseDTO(
        Long  id,
        String name,
        String model,
        List<ProductResponseDetailsDTO> details,
        BrandResponseDTO brand
) {
    public static ProductResponseDTO fromModel(Product product) {
        return new ProductResponseDTO(
                product.getId(),
                product.getName(),
                product.getModel(),
                product.getDetails().stream().map(ProductResponseDetailsDTO::fromModel).toList(),
                BrandResponseDTO.fromModel(product.getBrand())
        );
    }
}
