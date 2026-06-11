package com.tm.nc.shared.service.impl;

import com.tm.nc.shared.service.ResetService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ResetServiceImpl implements ResetService {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void resetAll() {
        resetSQL();
    }

    private void resetSQL() {

        List<String> tablasExistentes = List.of(
                "checkout_idempotency",
                "checkout_items",
                "checkouts",
                "items_cart",
                "carts",
                "product_details",
                "products",
                "colors",
                "brands",
                "clients",
                "admins"
        );

        String sql = "TRUNCATE TABLE " +
                tablasExistentes.stream().collect(Collectors.joining(", ")) +
                " CASCADE";

        entityManager.createNativeQuery(sql).executeUpdate();
    }
}