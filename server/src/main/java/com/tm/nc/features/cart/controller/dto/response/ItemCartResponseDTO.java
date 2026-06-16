package com.tm.nc.features.cart.controller.dto.response;

import com.tm.nc.domain.cart.model.ItemCart;
import com.tm.nc.features.color.controller.dto.response.ColorResponseSimpleDTO;
import com.tm.nc.features.product.controller.dto.response.ProductReponseSimpleDTO;
import com.tm.nc.features.productDetail.controller.dto.response.ProductDetailsSimpleResponseDTO;

public record ItemCartResponseDTO(
    ColorResponseSimpleDTO color,
    ProductDetailsSimpleResponseDTO detail,
    ProductReponseSimpleDTO product,
    double subTotal,
    int quantity
) {
    public static ItemCartResponseDTO from(ItemCart itemCart) {
        return new ItemCartResponseDTO(
                ColorResponseSimpleDTO.fromModel(itemCart.getColor()),
                ProductDetailsSimpleResponseDTO.fromDetails(itemCart.getProductDetail()),
                ProductReponseSimpleDTO.fromModel(itemCart.getColor().getProduct()),
                itemCart.getProductDetail().getPrice() * itemCart.getQuantity(),
                itemCart.getQuantity()
        );
    }
}
