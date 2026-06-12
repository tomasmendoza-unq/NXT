package com.tm.nc.features.order.controller.dto.request;

import jakarta.validation.constraints.Min;

public record OrderFilterRequestDTO(
        String status,
        @Min(0)
        int page,
        @Min(0)
        int size
) {
    public OrderFilterRequestDTO {
        if (status == null) status = "";
    }
}
