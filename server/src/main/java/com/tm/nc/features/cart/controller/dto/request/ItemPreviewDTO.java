package com.tm.nc.features.cart.controller.dto.request;

import jakarta.validation.constraints.Min;

public record ItemPreviewDTO(
        Long detailId,
        @Min(1)
        int quantity
) {

}
