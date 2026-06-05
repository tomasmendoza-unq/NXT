package com.tm.nc.features.cart.controller.dto;

public record CartRequestDTO(
    Long idColor,
    Long idDetails,
    int quantity
) {


}
