package com.tm.nc.shared.service.impl;

import com.tm.nc.shared.service.ResetService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

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
                "product_details",
                "products",
                "colors",
                "brands",
                "clients",
                "checkouts",
                "items_cart",
                "carts",
                "checkout_items"
        );

        for (String tableName : tablasExistentes) {
            limpiarTabla(tableName);
        }
    }

    private void limpiarTabla(String tableName) {
        try {
            entityManager.createNativeQuery("DELETE FROM " + tableName).executeUpdate();
        } catch (Exception e) {
            System.err.println("Error limpiando tabla: " + tableName + " - " + e.getMessage());
        }
    }
}
