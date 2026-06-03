package com.tm.nc.features.product.controller.dto;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.model.ProductDetail;
import com.tm.nc.features.brand.controller.dto.BrandResponseDTO;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public record ProductResponseDTO(
        Long  id,
        String name,
        String model,
        List<ColorResponseDTO> colors,
        BrandResponseDTO brand
) {
    public static ProductResponseDTO fromModel(Product product) {
        return new ProductResponseDTO(
                product.getId(),
                product.getName(),
                product.getModel(),
                product.getColors().stream().map(ColorResponseDTO::fromModel).toList(),
                BrandResponseDTO.fromModel(product.getBrand())
        );
    }
}
