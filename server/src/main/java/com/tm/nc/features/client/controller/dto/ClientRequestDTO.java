package com.tm.nc.features.client.controller.dto;

import com.google.i18n.phonenumbers.NumberParseException;
import com.google.i18n.phonenumbers.PhoneNumberUtil;
import com.google.i18n.phonenumbers.Phonenumber;
import com.tm.nc.domain.client.model.Client;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;

public record ClientRequestDTO(
        @NotBlank(message = "El nombre es requerido")
        String firstName,

        @NotBlank(message = "El apellido es requerido")
        String lastName,

        @NotBlank(message = "La dirección es requerida")
        String address,

        @NotBlank(message = "La provincia es requerida")
        String province,

        @NotBlank(message = "La ciudad es requerida")
        String city,

        @NotBlank(message = "El código postal es requerido")
        @Pattern(regexp = "^(\\d{4}|[A-Z]\\d{4}[A-Z]{3})$", message = "El código postal no es válido")
        String postalCode,

        @NotBlank(message = "El teléfono es requerido")
        String phone,

        @NotBlank(message = "El email es requerido")
        @Email(message = "El email no tiene un formato válido")
        String email
) {

    @AssertTrue(message = "El número de teléfono no es válido")
    @Schema(hidden = true)
    public boolean isPhoneValid() {
        if (phone == null || phone.isBlank()) return false;

        PhoneNumberUtil phoneNumberUtil = PhoneNumberUtil.getInstance();
        try {
            Phonenumber.PhoneNumber phoneNumber = phoneNumberUtil.parse(phone, "AR");
            return phoneNumberUtil.isValidNumber(phoneNumber);
        } catch (NumberParseException e) {
            return false;
        }
    }

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
