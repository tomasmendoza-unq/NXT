package com.tm.nc.domain.client.model;

import com.tm.nc.domain.cart.model.Cart;
import com.tm.nc.domain.user.model.User;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@NoArgsConstructor
@SuperBuilder
@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class Client extends User {
    private String phone;

    private String address;

    private String province;

    private String city;

    private String postalCode;

    @Builder.Default
    private Cart cart = new Cart();
}
