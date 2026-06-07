package com.tm.nc.features.cart.controller.dto.request;

public record CartRequestDTO(
    Long idColor,
    Long idDetails,
    int quantity
) {


}
