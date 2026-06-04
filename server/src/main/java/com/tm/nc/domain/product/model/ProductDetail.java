package com.tm.nc.domain.product.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDetail {
    private Long id;

    private int size;

    private double price;

    private String image;

    private int quantity;
}
