package com.tm.nc.domain.productDetail.model;

import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.product.model.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDetail {
    private Long id;

    private int size;

    private double price;

    private Color color;

    private int quantity;

    public boolean hasStock(Integer quantity) {
        return this.quantity >= quantity;
    }

    public String getName() {
        return color.getProduct().getModel();
    }
}
