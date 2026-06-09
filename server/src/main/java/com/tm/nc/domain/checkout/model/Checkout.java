package com.tm.nc.domain.checkout.model;

import com.tm.nc.domain.cart.exception.InsufficientStockException;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import com.tm.nc.domain.user.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Checkout {

    private Long id;

    private Client client;

    private String notes;

    @Builder.Default
    private Double total = 0D;

    @Builder.Default
    private CheckoutStatus status = CheckoutStatus.PENDING_PAYMENT;

    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    @Builder.Default
    private List<ItemCheckout> items = new ArrayList<>();


    public void addItem(ProductDetail detail, int quantity) {
        if(!detail.hasStock(quantity)) throw new InsufficientStockException("Insufficient stock");
        items.add(ItemCheckout.builder()
                .quantity(quantity)
                .unitPrice(detail.getPrice())
                .productDetail(detail)
                .build());

        total = total + (quantity * detail.getPrice());
    }
}