package com.tm.nc.domain.product.model;

import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.color.model.Color;
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

    private String model;

    private Brand brand;

    @Builder.Default
    private List<Color> colors = new ArrayList<>();

    public void addColor(List<Color> color) {
        colors.addAll(color);
    }
}
