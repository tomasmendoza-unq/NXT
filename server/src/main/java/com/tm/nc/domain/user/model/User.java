package com.tm.nc.domain.user.model;

import com.tm.nc.domain.cart.model.Cart;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Long id;

    @Builder.Default
    private Cart cart = new Cart();
}
