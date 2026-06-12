package com.tm.nc.features.admin.controller;

import com.tm.nc.domain.admin.service.AdminService;
import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.features.order.controller.dto.request.OrderFilterRequestDTO;
import com.tm.nc.features.order.controller.dto.response.OrderResponseSimpleDTO;
import com.tm.nc.shared.annotation.AdminEndpoint;
import com.tm.nc.shared.dto.PageResponseDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@Tag(name = "Admin", description = "Endpoints para las operaciones de admin")
public class AdminControllerREST {

    private final AdminService adminService;

    public AdminControllerREST(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/orders")
    @AdminEndpoint
    public ResponseEntity<PageResponseDTO<OrderResponseSimpleDTO>> getOrders(@RequestBody OrderFilterRequestDTO request){
        Page<Checkout> checkouts = adminService.findAllByStatus(request.status(), request.page(), request.size());

        Page<OrderResponseSimpleDTO> orders = checkouts.map(OrderResponseSimpleDTO::fromModel);

        PageResponseDTO<OrderResponseSimpleDTO> pages = PageResponseDTO.from(orders);

        return ResponseEntity.ok(pages);
    }
}
