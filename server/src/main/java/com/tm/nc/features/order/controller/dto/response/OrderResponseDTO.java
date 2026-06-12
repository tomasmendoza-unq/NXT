package com.tm.nc.features.order.controller.dto.response;

import com.tm.nc.features.client.controller.dto.ClientResponseDTO;

import java.util.List;

public record OrderResponseDTO(
        Long id,
        Double total,
        String status,
        String createdAt,
        ClientResponseDTO client,
        List<OrderItemResponseDTO> items
) {
}
