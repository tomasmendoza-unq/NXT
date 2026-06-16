package com.tm.nc.features.color.controller.dto.request;

import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.productDetail.controller.dto.request.ProductDetailRequestDTO;

import java.util.List;

public record ColorRequestDTO(
    String name,
    String color,
    List<ProductDetailRequestDTO> details
) {
    public Color toModel() {
        return Color.builder()
                .name(name)
                .color(color)
                .details(details.stream().map(ProductDetailRequestDTO::toModel).toList())
                .build();
    }
}
