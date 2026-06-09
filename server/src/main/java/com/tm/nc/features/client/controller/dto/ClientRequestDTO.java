package com.tm.nc.features.client.controller.dto;

import com.tm.nc.domain.client.model.Client;

public record ClientRequestDTO(
        String firstName,

        String lastName,

        String address,

        String province,

        String city,

        String postalCode,

        String phone,

        String email
) {
    public Client toModel() {
        return Client.builder()
                .firstName(firstName)
                .lastName(lastName)
                .address(address)
                .province(province)
                .city(city)
                .postalCode(postalCode)
                .phone(phone)
                .email(email)
                .build();
    }
}
