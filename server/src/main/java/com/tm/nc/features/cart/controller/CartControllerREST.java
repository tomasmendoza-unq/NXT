package com.tm.nc.features.cart.controller;

import com.tm.nc.domain.cart.model.Cart;
import com.tm.nc.domain.cart.service.CartService;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.service.UserService;
import com.tm.nc.features.cart.controller.dto.CartRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
