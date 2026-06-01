package com.tm.nc.features.product.controller.dto;

import com.tm.nc.domain.product.model.ProductDetail;

import java.util.List;

public record ProductVariantResponseDTO(
        ColorResponseDTO color,
        String image,
        List<ProductSizeResponseDTO> sizes
) {
    public static ProductVariantResponseDTO fromDetails(List<ProductDetail> details) {
        ProductDetail firstDetail = details.getFirst();

        return new ProductVariantResponseDTO(
                ColorResponseDTO.fromModel(firstDetail.getColor()),
                firstDetail.getImage(),
                details.stream().map(ProductSizeResponseDTO::fromModel).toList()
        );
    }
}
