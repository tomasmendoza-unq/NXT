package com.tm.nc.features.color.controller.dto.response;

import com.tm.nc.domain.color.model.Color;

public record ColorResponseSimpleDTO(
        Long id,
        String name,
        String color
) {
    public static ColorResponseSimpleDTO fromModel(Color color) {
        return new ColorResponseSimpleDTO(
                color.getId(),
                color.getName(),
                color.getColor()
        );
    }
}
