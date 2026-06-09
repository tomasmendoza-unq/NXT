package com.tm.nc.features.checkout.controller.dto.request;

import com.tm.nc.domain.checkout.model.ItemCheckout;

public record ItemCheckoutRequestDTO(
        Long idDetail,
        int quantity
) {
}
