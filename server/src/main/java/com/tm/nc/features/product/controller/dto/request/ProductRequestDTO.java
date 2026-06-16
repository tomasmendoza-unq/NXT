package com.tm.nc.features.product.controller.dto.request;

import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.color.controller.dto.request.ColorRequestDTO;

import java.util.List;

public record ProductRequestDTO(
        String name,
        String model,
        long brandId,
        List<ColorRequestDTO> colors
){
    public Product toModel() {
        return Product.builder()
                .name(name)
                .model(model)
                .colors(colors.stream().map(ColorRequestDTO::toModel).toList())
                .build();
    }
}
