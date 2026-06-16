package com.tm.nc.features.product.controller.dto.response;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.brand.controller.dto.response.BrandResponseDTO;
import com.tm.nc.features.color.controller.dto.response.ColorResponseDTO;

import java.util.List;

public record ProductResponseDTO(
        Long  id,
        String model,
        List<ColorResponseDTO> colors,
        BrandResponseDTO brand
) {
    public static ProductResponseDTO fromModel(Product product) {
        return new ProductResponseDTO(
                product.getId(),
                product.getModel(),
                product.getColors().stream().map(ColorResponseDTO::fromModel).toList(),
                BrandResponseDTO.fromModel(product.getBrand())
        );
    }
}
