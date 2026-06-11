package com.tm.nc.features.admin.controller;

import com.tm.nc.domain.admin.service.AdminService;
import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.features.order.controller.dto.OrderResponseSimpleDTO;
import com.tm.nc.shared.annotation.AdminEndpoint;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin")
@Tag(name = "Admin", description = "Endpoints para las operaciones de admin")
public class AdminControllerREST {

    private final AdminService adminService;

    public AdminControllerREST(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/orders/{status}")
    @AdminEndpoint
    public ResponseEntity<List<OrderResponseSimpleDTO>> getCheckoutsByStatus(@PathVariable(required = true) String status){
        List<Checkout> checkout = adminService.findAllByStatus(status);

        return ResponseEntity.ok(checkout.stream().map(OrderResponseSimpleDTO::fromModel).toList());
    }

    @GetMapping("/orders/")
    @AdminEndpoint
    public ResponseEntity<List<OrderResponseSimpleDTO>> getAllOrders() {
        List<Checkout> checkout = adminService.findAllOrders();

        return ResponseEntity.ok(
                checkout.stream()
                        .map(OrderResponseSimpleDTO::fromModel)
                        .toList()
        );
    }
}
