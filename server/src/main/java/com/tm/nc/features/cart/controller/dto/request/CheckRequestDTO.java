package com.tm.nc.features.cart.controller.dto.request;

public record CheckRequestDTO(
        Long detailId,
        Integer quantity
) {
}