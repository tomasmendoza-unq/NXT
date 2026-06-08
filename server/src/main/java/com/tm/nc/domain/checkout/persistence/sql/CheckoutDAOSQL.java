package com.tm.nc.domain.checkout.persistence.sql;

import com.tm.nc.domain.checkout.model.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckoutDAOSQL extends JpaRepository<Checkout, Long> {
}
