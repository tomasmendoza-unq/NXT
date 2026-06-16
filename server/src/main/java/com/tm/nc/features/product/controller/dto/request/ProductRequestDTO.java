package com.tm.nc.features.product.controller.dto.request;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.color.controller.dto.request.ColorRequestDTO;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record ProductRequestDTO(
        @NotNull(message = "El nombre del producto no puede ser nulo")
        String name,
        @NotNull(message = "El modelo no puede ser nulo")
        String model,
        @Min(value = 0, message = "El id de la marca debe ser mayor 0")
        @NotNull(message = "El producto debe estar asociado a una marca")
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
