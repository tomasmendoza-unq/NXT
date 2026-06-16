package com.tm.nc.features.productDetail.controller.dto.request;

import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import jakarta.validation.constraints.Min;

import java.util.List;

public record ProductDetailRequestDTO(
        @Min(value = 0, message = "El talle debe ser mayor a 0")
        int size,
        @Min(value = 0, message = "El precio debe ser mayor a 0")
        double price,
        String image,
        List<String>gallery,
        @Min(value = 0, message = "El stock debe ser mayor a 0")
        int quantity
) {
    public ProductDetail toModel() {
        return ProductDetail.builder()
                .size(size)
                .price(price)
                .image(image)
                .gallery(gallery)
                .quantity(quantity)
                .build();
    }
}
