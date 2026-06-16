package com.tm.nc.domain.color.model;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Color {
    private Long id;

    private String name;

    private String color;

    private Product product;

    private String image;

    private List<String> gallery;

    private List<ProductDetail> details = new ArrayList<>();
}
