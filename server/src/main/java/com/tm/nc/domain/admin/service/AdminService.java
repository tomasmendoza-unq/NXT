package com.tm.nc.domain.admin.service;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.features.product.controller.dto.request.ProductRequestDTO;
import org.springframework.data.domain.Page;

public interface AdminService {

    Page<Checkout> findAllByStatus(String status, int page, int size);

    Product createProduct(Product model, ProductRequestDTO request);

    Checkout getOrderById(Long orderId);
}
