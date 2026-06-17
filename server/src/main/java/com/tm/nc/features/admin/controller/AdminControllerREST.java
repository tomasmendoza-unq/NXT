package com.tm.nc.features.admin.controller;

import com.tm.nc.domain.admin.service.AdminService;
import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.order.controller.dto.request.OrderFilterRequestDTO;
import com.tm.nc.features.order.controller.dto.response.OrderResponseDTO;
import com.tm.nc.features.order.controller.dto.response.OrderResponseSimpleDTO;
import com.tm.nc.features.product.controller.dto.request.ProductRequestDTO;
import com.tm.nc.features.product.controller.dto.response.ProductResponseDTO;
import com.tm.nc.shared.annotation.AdminEndpoint;
import com.tm.nc.shared.dto.PageResponseDTO;
import com.tm.nc.shared.dto.TableResponseDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public ResponseEntity<TableResponseDTO<OrderResponseSimpleDTO>> getOrders(@RequestBody OrderFilterRequestDTO request){
        Page<Checkout> checkouts = adminService.findAllByStatus(request.status(), request.page(), request.size());

        Page<OrderResponseSimpleDTO> orders = checkouts.map(OrderResponseSimpleDTO::fromModel);

        TableResponseDTO<OrderResponseSimpleDTO> table =                 TableResponseDTO.fromPage(
                List.of("ID","Cliente","Total","Estado","Fecha","Acciones"),
                orders,
                OrderResponseSimpleDTO::id
        );

        return ResponseEntity.ok(table);
    }

    @PostMapping("/products")
    @AdminEndpoint
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductRequestDTO request) {
        Product product = adminService.createProduct(request.toModel(), request);

        ProductResponseDTO productResponseDTO = ProductResponseDTO.fromModel(product);

        return ResponseEntity.ok(productResponseDTO);
    }

    @GetMapping("/orders/{orderId}")
    @AdminEndpoint
    public ResponseEntity<OrderResponseDTO>  getOrder(@PathVariable("orderId") Long orderId) {
        Checkout checkout = adminService.getOrderById(orderId);

        OrderResponseDTO orderResponseDTO = OrderResponseDTO.fromModel(checkout);

        return ResponseEntity.ok(orderResponseDTO);
    }
}
