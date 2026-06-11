package com.tm.nc.domain.checkout.model.enums;

import java.util.Arrays;

public enum CheckoutStatus {
    PENDING,
    PAID,
    SHIPPED,
    DELIVERED,
    CANCELLED;

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