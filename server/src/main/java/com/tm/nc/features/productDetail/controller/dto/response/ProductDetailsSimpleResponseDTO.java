package com.tm.nc.features.productDetail.controller.dto.response;

import com.tm.nc.domain.productDetail.model.ProductDetail;

public record ProductDetailsSimpleResponseDTO(
        Long id,
        int size,
        double price,
        String image
) {
    public static ProductDetailsSimpleResponseDTO fromDetails(ProductDetail productDetail) {
        return new ProductDetailsSimpleResponseDTO(
                productDetail.getId(),
                productDetail.getSize(),
                productDetail.getPrice(),
                productDetail.getImage()
        );
    }
}
