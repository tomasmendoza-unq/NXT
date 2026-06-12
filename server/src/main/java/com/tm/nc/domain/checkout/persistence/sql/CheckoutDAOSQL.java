package com.tm.nc.domain.checkout.persistence.sql;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CheckoutDAOSQL extends JpaRepository<Checkout, Long> {
    Page<Checkout> findAllByStatus(CheckoutStatus status, Pageable pageable);

    List<Checkout> findAllByStatus(CheckoutStatus status);
}
