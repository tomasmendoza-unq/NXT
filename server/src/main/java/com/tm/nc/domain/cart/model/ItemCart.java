package com.tm.nc.domain.cart.model;

import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ItemCart {

    private Long id;

    private Color color;

    private ProductDetail productDetail;

    private int quantity;

    public boolean validateStock() {
        return quantity <= productDetail.getQuantity();
    }
}
