package com.tm.nc.features.order.controller.dto.request;

public record OrderFilterRequestDTO(
        String status,
        int page,
        int size
) {
    public OrderFilterRequestDTO {
        if (status == null) status = "";
    }
}
