package com.tm.nc.domain.checkout.model;

import com.tm.nc.domain.productDetail.model.ProductDetail;
import lombok.*;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = {"productDetail"})
public class ItemCheckout {
    private Long id;

    private ProductDetail productDetail;

    private Integer quantity;

    private Double unitPrice;
}
