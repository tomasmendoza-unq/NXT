package com.tm.nc.features.client.controller;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.client.repository.ClientService;
import com.tm.nc.features.checkout.controller.dto.request.CheckoutRequestDTO;
import com.tm.nc.features.checkout.controller.dto.response.CheckoutResponseDTO;
import com.tm.nc.features.order.controller.dto.request.OrderFilterRequestDTO;
import com.tm.nc.features.order.controller.dto.response.OrderResponseDTO;
import com.tm.nc.features.order.controller.dto.response.OrderResponseSimpleDTO;
import com.tm.nc.shared.annotation.ClientEndpoint;
import com.tm.nc.shared.dto.TableResponseDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
@Tag(name = "Client", description = "Operaciones relacionadas con la gestión de los datos de un cliente")
public class ClientControllerREST {

    private final ClientService clientService;

    public ClientControllerREST(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping("/orders")
    @ClientEndpoint
    public ResponseEntity<TableResponseDTO<OrderResponseSimpleDTO>> getOrders(@RequestAttribute("userId") Long idClient,
                                                                              @RequestBody @Valid OrderFilterRequestDTO request){
        Page<Checkout> checkouts = clientService.findAllByStatus(request.status(), request.page(), request.size(), idClient);

        Page<OrderResponseSimpleDTO> orders = checkouts.map(OrderResponseSimpleDTO::fromModel);

        TableResponseDTO<OrderResponseSimpleDTO> table =                 TableResponseDTO.fromPage(
                List.of("ID","Cliente","Total","Estado","Fecha","Acciones"),
                orders,
                OrderResponseSimpleDTO::id
        );

        return ResponseEntity.ok(table);
    }

    @GetMapping("/orders/{idOrder}")
    @ClientEndpoint
    public ResponseEntity<OrderResponseDTO> getOrder(@PathVariable("idOrder") Long idOrder){
        Checkout order = clientService.findOrderById(idOrder);

        OrderResponseDTO orderResponse = OrderResponseDTO.fromModel(order);

        return ResponseEntity.ok(orderResponse);
    }

    @PostMapping("/checkout")
    public ResponseEntity<CheckoutResponseDTO> checkout(
            @RequestHeader("Idempotency-Key") String idempotencyKey,
            @RequestBody @Valid CheckoutRequestDTO checkoutRequestDTO,
            @RequestAttribute("userId") Long idClient
    ) {
        Checkout checkout = clientService.generateCheckout(checkoutRequestDTO.toModel(), checkoutRequestDTO.itemCheckoutRequestDTO(), idempotencyKey, idClient);

        return ResponseEntity.ok(CheckoutResponseDTO.fromModel(checkout));
    }
}
