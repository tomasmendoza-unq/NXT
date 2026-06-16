package com.tm.nc.features.checkout.controller.dto.response;

import com.tm.nc.domain.checkout.model.ItemCheckout;
import com.tm.nc.features.productDetail.controller.dto.response.ProductDetailsSimpleResponseDTO;

public record ItemsCheckoutResponseDTO(
        ProductDetailsSimpleResponseDTO detail,
        Integer quantity,
        Double unitPrice
) {
    public static ItemsCheckoutResponseDTO fromModel(ItemCheckout itemCheckout) {
        return new ItemsCheckoutResponseDTO(
                ProductDetailsSimpleResponseDTO.fromDetails(itemCheckout.getProductDetail()),
                itemCheckout.getQuantity(),
                itemCheckout.getUnitPrice()
        );
    }
}
