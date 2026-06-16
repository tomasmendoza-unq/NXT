package com.tm.nc.features.color.controller.dto.response;

import com.tm.nc.domain.color.model.Color;

import java.util.List;

public record ColorResponseSimpleDTO(
        Long id,
        String name,
        String color,
        String image
) {
    public static ColorResponseSimpleDTO fromModel(Color color) {
        return new ColorResponseSimpleDTO(
                color.getId(),
                color.getName(),
                color.getColor(),
                color.getImage()
        );
    }
}
