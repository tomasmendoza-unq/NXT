package com.tm.nc.domain.checkout.service;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.features.checkout.controller.dto.request.ItemCheckoutRequestDTO;

import java.util.List;

public interface CheckoutService {
    Checkout generateCheckout(Checkout model, List<ItemCheckoutRequestDTO> itemCheckoutRequestDTOS, String idempotencyKey);

    Checkout findById(Long id);

    List<Checkout> findAllByStatus(String status);
}
