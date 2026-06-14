package com.tm.nc.features.order.controller.dto.response;

import com.tm.nc.domain.checkout.model.Checkout;

import java.time.LocalDateTime;

public record OrderResponseSimpleDTO(
        Long id,
        String email,
        Double total,
        String status,
        LocalDateTime createdAt

) {
    public static OrderResponseSimpleDTO fromModel(Checkout checkout) {
        return new OrderResponseSimpleDTO(
                checkout.getId(),
                checkout.getClient().getEmail(),
                checkout.getTotal(),
                checkout.getStatus().toString(),
                checkout.getCreatedAt()

        );
    }
}
