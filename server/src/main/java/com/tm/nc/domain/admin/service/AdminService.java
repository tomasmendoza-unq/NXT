package com.tm.nc.domain.admin.service;

import com.tm.nc.domain.checkout.model.Checkout;
import org.springframework.data.domain.Page;

import java.util.List;

public interface AdminService {

    Page<Checkout> findAllByStatus(String status, int page, int size);
}
