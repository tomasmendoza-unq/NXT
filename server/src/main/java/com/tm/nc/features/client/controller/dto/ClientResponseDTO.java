package com.tm.nc.features.client.controller.dto;

import com.tm.nc.domain.client.model.Client;

public record ClientResponseDTO(
        String email,
        String firstName,
        String lastName
) {
    public static ClientResponseDTO fromModel(Client client) {
        return null;
    }
}
