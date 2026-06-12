package com.tm.nc.domain.admin.service.impl;

import com.tm.nc.domain.admin.service.AdminService;
import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import com.tm.nc.domain.checkout.persistence.sql.CheckoutDAOSQL;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    private final CheckoutDAOSQL checkoutDAOSQL;

    public AdminServiceImpl(CheckoutDAOSQL checkoutDAOSQL) {
        this.checkoutDAOSQL = checkoutDAOSQL;
    }

    @Override
    public Page<Checkout> findAllByStatus(String status, int page, int size) {
        return status.isBlank() ? checkoutDAOSQL.findAll(PageRequest.of(page, size)) : checkoutDAOSQL.findAllByStatus(CheckoutStatus.fromString(status), PageRequest.of(page, size));
    }


}
