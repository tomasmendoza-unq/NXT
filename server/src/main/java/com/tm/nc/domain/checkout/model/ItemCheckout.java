package com.tm.nc.domain.checkout.model;

import com.tm.nc.domain.productDetail.model.ProductDetail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemCheckout {
    private Long id;

    private ProductDetail productDetail;

    private Integer quantity;

    private Double unitPrice;
}
