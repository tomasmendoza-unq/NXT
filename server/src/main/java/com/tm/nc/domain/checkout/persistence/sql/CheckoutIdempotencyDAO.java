package com.tm.nc.domain.checkout.persistence.sql;

import com.tm.nc.domain.checkout.model.CheckoutIdempotency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckoutIdempotencyDAO extends JpaRepository<CheckoutIdempotency, String> {
}