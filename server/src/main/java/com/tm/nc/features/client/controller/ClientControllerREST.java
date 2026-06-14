package com.tm.nc.features.client.controller;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.client.service.ClientService;
import com.tm.nc.features.order.controller.dto.request.OrderFilterRequestDTO;
import com.tm.nc.features.order.controller.dto.response.OrderResponseSimpleDTO;
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
    public ResponseEntity<TableResponseDTO<OrderResponseSimpleDTO>> getOrders(@RequestAttribute("userId") Long idClient,
                                                                              @RequestBody @Valid OrderFilterRequestDTO request){
        Page<Checkout> checkouts = clientService.findAllByStatus(request.status(), request.page(), request.size(), idClient);

        Page<OrderResponseSimpleDTO> orders = checkouts.map(OrderResponseSimpleDTO::fromModel);

        TableResponseDTO<OrderResponseSimpleDTO> table =                 TableResponseDTO.fromPage(
                List.of("ID","Total","Estado","Fecha","Acciones"),
                orders,
                OrderResponseSimpleDTO::id
        );

        return ResponseEntity.ok(table);
    }
}
