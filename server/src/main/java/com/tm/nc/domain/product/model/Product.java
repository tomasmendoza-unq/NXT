package com.tm.nc.domain.product.model;

import com.tm.nc.domain.brand.model.Brand;
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
public class Product {
    private Long  id;

    private String name;

    private String model;

    private Brand brand;

    @Builder.Default
    private List<ProductDetail> details = new ArrayList<>();

    public void addDetails(List<ProductDetail> productDetail) {
        details.addAll(productDetail);
    }
}
