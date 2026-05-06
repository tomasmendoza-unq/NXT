package com.tm.nc.features.product.controller.dto;

import com.tm.nc.domain.product.model.Color;

public record ColorResponseDTO(
        Long id,
        String name,
        String color
) {
    public static ColorResponseDTO fromModel(Color color) {
        return new ColorResponseDTO(
                color.getId(),
                color.getName(),
                color.getColor()
        );
    }
}
