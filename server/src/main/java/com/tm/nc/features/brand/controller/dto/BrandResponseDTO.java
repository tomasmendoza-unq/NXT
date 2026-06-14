package com.tm.nc.features.brand.controller.dto;

import com.tm.nc.domain.brand.model.Brand;

public record BrandResponseDTO(
        Long id,
        String name,
        String logo
) {
    public static BrandResponseDTO fromModel(Brand brand) {
        return new BrandResponseDTO(
                brand.getId(),
                brand.getName(),
                brand.getLogo()
        );
    }
}
