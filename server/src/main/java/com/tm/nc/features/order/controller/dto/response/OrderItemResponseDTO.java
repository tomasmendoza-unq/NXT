package com.tm.nc.features.order.controller.dto.response;

import com.tm.nc.domain.checkout.model.ItemCheckout;
import com.tm.nc.features.productDetail.controller.dto.response.ProductDetailsSimpleResponseDTO;

public record OrderItemResponseDTO(
        Long idDetail,
        ProductDetailsSimpleResponseDTO detail,
        String name,
        String image,
        Integer quantity
) {
    public static OrderItemResponseDTO fromModel(ItemCheckout itemCheckout) {
        return new OrderItemResponseDTO(
                itemCheckout.getId(),
                ProductDetailsSimpleResponseDTO.fromDetails(itemCheckout.getProductDetail()),
                itemCheckout.getProductDetail().getName(),
                itemCheckout.getProductDetail().getColor().getImage(),
                itemCheckout.getQuantity()
        );
    }
}
