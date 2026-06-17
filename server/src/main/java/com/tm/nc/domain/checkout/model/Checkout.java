package com.tm.nc.domain.checkout.model;

import com.tm.nc.domain.cart.exception.InsufficientStockException;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import com.tm.nc.domain.user.model.User;
import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"items"})
public class Checkout {

    private Long id;

    private Client client;

    private String notes;

    @Builder.Default
    private Double total = 0D;

    @Builder.Default
    private CheckoutStatus status = CheckoutStatus.PENDING;

    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    @Builder.Default
    private List<ItemCheckout> items = new ArrayList<>();


    public void addItem(ProductDetail detail, int quantity) {
        if(!detail.hasStock(quantity)) throw new InsufficientStockException("No hay stock de: " + detail.getName());
        items.add(ItemCheckout.builder()
                .quantity(quantity)
                .unitPrice(detail.getPrice())
                .productDetail(detail)
                .build());

        total = total + (quantity * detail.getPrice());
    }

    public String getStatusLabel() {
        return status.toString();
    }

    public String getCreatedAtFormatted() {
        return createdAt.format(DateTimeFormatter.ofPattern("dd-MM-yyyy"));
    }
}