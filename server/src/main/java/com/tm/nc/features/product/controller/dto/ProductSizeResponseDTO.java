package com.tm.nc.features.product.controller.dto;

import com.tm.nc.domain.product.model.ProductDetail;

public record ProductSizeResponseDTO(
        Long id,
        int size,
        double price,
        int quantity
) {
    public static ProductSizeResponseDTO fromModel(ProductDetail productDetail) {
        return new ProductSizeResponseDTO(
                productDetail.getId(),
                productDetail.getSize(),
                productDetail.getPrice(),
                productDetail.getQuantity()
        );
    }
}
