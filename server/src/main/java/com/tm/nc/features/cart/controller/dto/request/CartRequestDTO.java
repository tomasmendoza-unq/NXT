package com.tm.nc.features.cart.controller.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record CartRequestDTO(
    @NotNull(message = "El id del color es requerido")
    Long idColor,

    @NotNull(message = "El id del detalle es requerido")
    Long idDetails,

    @Min(value = 1, message = "La cantidad debe ser mayor a 0")
    int quantity
) {


}
