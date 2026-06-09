package com.tm.nc.features.checkout.controller;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.service.CheckoutService;
import com.tm.nc.features.checkout.controller.dto.request.CheckoutRequestDTO;
import com.tm.nc.features.checkout.controller.dto.response.CheckoutResponseDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/checkout")
@Tag(name = "Checkout", description = "Operaciones relacionadas con la gestión de pedidos")
public class CheckoutControllerREST {

    private final CheckoutService checkoutService;

    public CheckoutControllerREST(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @GetMapping("/{status}")
    public ResponseEntity<List<CheckoutResponseDTO>> getCheckoutsByStatus(@PathVariable String status){
        List<Checkout> checkout = checkoutService.findAllByStatus(status);

        return ResponseEntity.ok(checkout.stream().map(CheckoutResponseDTO::fromModel).toList());
    }

    @PostMapping
    public ResponseEntity<CheckoutResponseDTO> generateCheckout(
            @RequestHeader("Idempotency-Key") String idempotencyKey,
            @RequestBody CheckoutRequestDTO checkoutRequestDTO) {
        Checkout checkout = checkoutService.generateCheckout(checkoutRequestDTO.toModel(), checkoutRequestDTO.itemCheckoutRequestDTO(), idempotencyKey);

        return  ResponseEntity.ok(CheckoutResponseDTO.fromModel(checkout));
    }
}
