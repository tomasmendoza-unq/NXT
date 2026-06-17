package com.tm.nc.features.order.controller.dto.response;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.features.client.controller.dto.ClientResponseDTO;

import java.util.List;

public record OrderResponseDTO(
        Long id,
        Double total,
        String status,
        String notes,
        String createdAt,
        ClientResponseDTO client,
        List<OrderItemResponseDTO> items
) {
    public static OrderResponseDTO fromModel(Checkout order) {
        return new OrderResponseDTO(
                order.getId(),
                order.getTotal(),
                order.getStatusLabel(),
                order.getNotes(),
                order.getCreatedAtFormatted(),
                ClientResponseDTO.fromModel(order.getClient()),
                order.getItems().stream().map(OrderItemResponseDTO::fromModel).toList()
        );
    }
}
