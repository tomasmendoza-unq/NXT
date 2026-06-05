package com.tm.nc.features.cart.controller.dto.response;

import com.tm.nc.domain.productDetail.model.ProductDetail;
import com.tm.nc.features.color.controller.dto.ColorResponseSimpleDTO;
import com.tm.nc.features.product.controller.dto.ProductDetailsResponseDTO;
import com.tm.nc.features.product.controller.dto.ProductReponseSimpleDTO;
import com.tm.nc.features.product.controller.dto.ProductResponseDTO;

public record ItemCartDTO(
    ColorResponseSimpleDTO color,
    ProductDetailsResponseDTO productDetail,
    ProductReponseSimpleDTO product
) {
    public static ItemCartDTO from(ProductDetail productDetail) {
        return new ItemCartDTO(
                ColorResponseSimpleDTO.fromModel(productDetail.getColor()),
                ProductDetailsResponseDTO.fromDetails(productDetail),
                ProductReponseSimpleDTO.fromModel(productDetail.getColor().getProduct())

        );
    }
}
