package com.tm.nc.features.product.controller.dto;

import com.tm.nc.domain.product.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.model.ProductDetail;

public record ProductResponseDetailsDTO(
         Long id,
         int size,
         double price,
         String image,
         ColorResponseDTO color,
         int quantity
) {
    public static   ProductResponseDetailsDTO fromModel(ProductDetail productDetail) {
        return new ProductResponseDetailsDTO(
                productDetail.getId(),
                productDetail.getSize(),
                productDetail.getPrice(),
                productDetail.getImage(),
                ColorResponseDTO.fromModel(productDetail.getColor()),
                productDetail.getQuantity()
        );
    }
}
