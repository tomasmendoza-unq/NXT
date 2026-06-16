package com.tm.nc.features.productDetail.controller.dto.response;

import com.tm.nc.domain.productDetail.model.ProductDetail;

import java.util.List;

public record ProductDetailsResponseDTO(
        Long id,
        int size,
        double price,
        int quantity
) {
    public static ProductDetailsResponseDTO fromDetails(ProductDetail details) {
        return new ProductDetailsResponseDTO(
                details.getId(),
                details.getSize(),
                details.getPrice(),
                details.getQuantity()
        );
    }
}
