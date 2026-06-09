package com.tm.nc.features.checkout.controller.dto.request;

import com.tm.nc.domain.checkout.model.ItemCheckout;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record ItemCheckoutRequestDTO(
        @NotNull(message = "El id del detalle es requerido")
        Long idDetail,

        @Min(value = 1, message = "La cantidad debe ser mayor a 0")
        int quantity
) {
}
