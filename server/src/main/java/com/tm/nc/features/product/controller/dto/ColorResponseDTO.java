package com.tm.nc.features.product.controller.dto;

import com.tm.nc.domain.color.model.Color;

import java.util.List;

public record ColorResponseDTO(
        Long id,
        String name,
        String color,
        List<ProductDetailsResponseDTO> variants
) {
    public static ColorResponseDTO fromModel(Color color) {
        return new ColorResponseDTO(
                color.getId(),
                color.getName(),
                color.getColor(),
                color.getDetails().stream().map(ProductDetailsResponseDTO::fromDetails).toList()
        );
    }
}
