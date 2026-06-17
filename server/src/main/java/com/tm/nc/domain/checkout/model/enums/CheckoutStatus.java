package com.tm.nc.domain.checkout.model.enums;

import java.util.Arrays;

public enum CheckoutStatus {
    PENDING("Pendiente"),
    PAID("Pagado"),
    SHIPPED("Enviado"),
    DELIVERED("Entregado"),
    CANCELLED("Cancelado");

    private final String label;

    CheckoutStatus(String label) {
        this.label = label;
    }

    @Override
    public String toString() {
        return label;
    }

    public static CheckoutStatus fromString(String value) {
        return Arrays.stream(values())
                .filter(status -> status.name().equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() ->
                        new IllegalArgumentException(
                                "Invalid checkout status: " + value
                        ));
    }
}