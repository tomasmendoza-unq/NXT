package com.tm.nc.features.product.controller.dto;

import com.tm.nc.domain.product.model.ProductDetail;

public record ProductDetailsResponseDTO(
        Long id,
        int size,
        double price,
        String image,
        int quantity
) {
    public static ProductDetailsResponseDTO fromDetails(ProductDetail details) {
        return new ProductDetailsResponseDTO(
                details.getId(),
                details.getSize(),
                details.getPrice(),
                details.getImage(),
                details.getQuantity()
        );
    }
}
