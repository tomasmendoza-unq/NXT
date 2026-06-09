package com.tm.nc.domain.checkout.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CheckoutIdempotency {

    private String idempotencyKey;

    private Long checkoutId;

    private LocalDateTime createdAt;
}