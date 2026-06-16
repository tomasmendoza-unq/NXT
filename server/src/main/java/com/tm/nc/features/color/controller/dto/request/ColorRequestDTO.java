package com.tm.nc.features.color.controller.dto.request;

import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.productDetail.controller.dto.request.ProductDetailRequestDTO;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record ColorRequestDTO(
    @NotNull(message = "El color debe tener un nombre")
    String name,
    String color,
    String image,
    List<String>gallery,
    List<ProductDetailRequestDTO> details
) {
    public Color toModel() {
        return Color.builder()
                .name(name)
                .color(color)
                .image(image)
                .gallery(gallery)
                .details(details.stream().map(ProductDetailRequestDTO::toModel).toList())
                .build();
    }
}
