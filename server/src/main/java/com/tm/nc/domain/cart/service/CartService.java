package com.tm.nc.domain.cart.service;

import com.tm.nc.domain.cart.model.Cart;
import com.tm.nc.domain.cart.model.ItemCart;
import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.features.cart.controller.dto.request.ItemPreviewDTO;
import com.tm.nc.features.cart.controller.dto.request.CartRequestDTO;
import org.jspecify.annotations.Nullable;

import java.util.List;

public interface CartService {
    void addToCart(CartRequestDTO cartRequestDTO, Client user);

    Cart findById(Long idCart);

    List<ItemCart> findItemsCart(List<ItemPreviewDTO> itemPreview);

    @Nullable Boolean checkStock(Long aLong, Integer quantity);
}
