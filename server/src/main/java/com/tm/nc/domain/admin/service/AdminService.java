package com.tm.nc.domain.admin.service;

import com.tm.nc.domain.checkout.model.Checkout;

import java.util.List;

public interface AdminService {
    List<Checkout> findAllByStatus(String status);

    List<Checkout> findAllOrders();
}
