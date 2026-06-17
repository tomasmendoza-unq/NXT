package com.tm.nc.features.checkout.controller;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.service.CheckoutService;
import com.tm.nc.features.checkout.controller.dto.request.CheckoutRequestDTO;
import com.tm.nc.features.checkout.controller.dto.response.CheckoutResponseDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/checkout")
@Tag(name = "Checkout", description = "Operaciones relacionadas con la gestión de pedidos")
public class CheckoutControllerREST {

    private final CheckoutService checkoutService;

    public CheckoutControllerREST(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }


    @PostMapping
    public ResponseEntity<CheckoutResponseDTO> generateCheckout(
            @RequestHeader("Idempotency-Key") String idempotencyKey,
            @RequestBody @Valid CheckoutRequestDTO checkoutRequestDTO) {
        Checkout checkout = checkoutService.generateCheckout(checkoutRequestDTO.toModel(), checkoutRequestDTO.itemCheckoutRequestDTO(), idempotencyKey, null);

        return  ResponseEntity.ok(CheckoutResponseDTO.fromModel(checkout));
    }
}
