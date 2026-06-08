package com.tm.nc.domain.cart.model;

import com.tm.nc.domain.cart.exception.InsufficientStockException;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "items")
public class Cart {

    private Long id;

    private List<ItemCart> items = new ArrayList<>();

    public void addToCard(ItemCart itemCart) {
        if(!itemCart.validateStock()) throw new InsufficientStockException("Insufficient stock");
        items.add(itemCart);
    }
}
