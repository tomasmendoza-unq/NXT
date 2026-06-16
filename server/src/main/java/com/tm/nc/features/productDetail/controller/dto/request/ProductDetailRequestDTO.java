package com.tm.nc.features.productDetail.controller.dto.request;

import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.productDetail.model.ProductDetail;

import java.util.List;

public record ProductDetailRequestDTO(
        int size,
        double price,
        String image,
        List<String>gallery,
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
