package com.tm.nc.domain.cart.persistence.sql;

import com.tm.nc.domain.cart.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartSQLDAO extends JpaRepository<Cart, Long> {
}
