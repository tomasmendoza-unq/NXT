package com.tm.nc.features.checkout.controller.dto.response;

import com.tm.nc.domain.checkout.model.Checkout;
import org.jspecify.annotations.Nullable;

import java.time.LocalDateTime;
import java.util.List;

public record CheckoutResponseDTO(
        Long id,
        Double total,
        LocalDateTime checkoutDateTime,
        List<ItemsCheckoutResponseDTO> items
) {

    public static @Nullable CheckoutResponseDTO fromModel(Checkout checkout) {
        return  new CheckoutResponseDTO(
                checkout.getId(),
                checkout.getTotal(),
                checkout.getCreatedAt(),
                checkout.getItems().stream().map(ItemsCheckoutResponseDTO::fromModel).toList()
        );
    }
}
