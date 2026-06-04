package com.tm.nc.domain.cart.service;

import com.tm.nc.domain.cart.model.Cart;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.features.cart.controller.dto.CartRequestDTO;

public interface CartService {
    void addToCart(CartRequestDTO cartRequestDTO, User user);

    Cart findById(Long idCart);
}
