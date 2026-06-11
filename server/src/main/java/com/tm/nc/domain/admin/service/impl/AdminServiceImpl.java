package com.tm.nc.domain.admin.service.impl;

import com.tm.nc.domain.admin.service.AdminService;
import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import com.tm.nc.domain.checkout.persistence.sql.CheckoutDAOSQL;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    private final CheckoutDAOSQL checkoutDAOSQL;

    public AdminServiceImpl(CheckoutDAOSQL checkoutDAOSQL) {
        this.checkoutDAOSQL = checkoutDAOSQL;
    }

    @Override
    public List<Checkout> findAllByStatus(String status) {
        CheckoutStatus checkoutStatus = CheckoutStatus.fromString(status);

        return checkoutDAOSQL.findAllByStatus(checkoutStatus);
    }
}
