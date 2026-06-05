package com.tm.nc.features.cart.controller;

import com.tm.nc.domain.cart.model.ItemCart;
import com.tm.nc.domain.cart.service.CartService;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.service.UserService;
import com.tm.nc.features.cart.controller.dto.request.ItemPreviewDTO;
import com.tm.nc.features.cart.controller.dto.request.CartRequestDTO;
import com.tm.nc.features.cart.controller.dto.response.ItemCartResponseDTO;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/cart")
public class CartControllerREST {

    private final CartService cartService;

    private final UserService userService;

    public CartControllerREST(CartService cartService, UserService userService) {
        this.cartService = cartService;
        this.userService = userService;
    }

    @PostMapping("/add")
    public void addToCart(@RequestBody CartRequestDTO cartRequestDTO) {
        //TODO: CUANDO YA SE TENGA READY SECURITY MODIFICAR
        User user = userService.generateUser();
        cartService.addToCart(cartRequestDTO, user);
    }

    @PostMapping("/preview")
    public ResponseEntity<List<ItemCartResponseDTO>> previewCart(@RequestBody @Valid List<ItemPreviewDTO> itemPreview) {
        List<ItemCart> items = cartService.findItemsCart(itemPreview);
        List<ItemCartResponseDTO> response = items.stream().map(ItemCartResponseDTO::from).toList();

        return ResponseEntity.ok(response);
    }
}
