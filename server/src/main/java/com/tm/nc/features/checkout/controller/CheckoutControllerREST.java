package com.tm.nc.features.checkout.controller;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.service.CheckoutService;
import com.tm.nc.features.checkout.controller.dto.request.CheckoutRequestDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/checkout")
@Tag(name = "Checkout", description = "Operaciones relacionadas con la gestión de pedidos")
public class CheckoutControllerREST {

    private final CheckoutService checkoutService;

    public CheckoutControllerREST(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }


    @PostMapping
    public ResponseEntity<?> generateCheckout(@RequestBody CheckoutRequestDTO checkoutRequestDTO) {
        Checkout checkout = checkoutService.generateCheckout(checkoutRequestDTO.toModel(), checkoutRequestDTO.itemCheckoutRequestDTO());

        return  ResponseEntity.ok(checkout);
    }
}
