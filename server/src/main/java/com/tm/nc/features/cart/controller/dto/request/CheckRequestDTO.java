package com.tm.nc.features.cart.controller.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record CheckRequestDTO(
        @NotNull(message = "El id del detalle es requerido")
        Long detailId,
        @Min(value = 1, message = "La cantidad debe ser mayor a 0")
        Integer quantity
) {
}