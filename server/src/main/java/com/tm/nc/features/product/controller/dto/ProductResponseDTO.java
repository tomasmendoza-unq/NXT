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
        List<ProductVariantResponseDTO> variants,
        BrandResponseDTO brand
) {
    public static ProductResponseDTO fromModel(Product product) {
        return new ProductResponseDTO(
                product.getId(),
                product.getName(),
                product.getModel(),
                groupDetailsByColor(product.getDetails()),
                BrandResponseDTO.fromModel(product.getBrand())
        );
    }

    private static List<ProductVariantResponseDTO> groupDetailsByColor(List<ProductDetail> details) {
        Map<Long, List<ProductDetail>> detailsByColor = new LinkedHashMap<>();

        details.forEach(detail -> detailsByColor
                .computeIfAbsent(detail.getColor().getId(), colorId -> new java.util.ArrayList<>())
                .add(detail));

        return detailsByColor.values()
                .stream()
                .map(ProductVariantResponseDTO::fromDetails)
                .toList();
    }
}
