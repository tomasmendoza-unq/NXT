package com.tm.nc.shared.service.impl;

import com.tm.nc.shared.service.ResetService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

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
        Set<String> tablasExistentes = obtenerTablasExistentes();

        if (tablasExistentes.isEmpty()) {
            return;
        }

        for (String tableName : tablasExistentes) {
            limpiarTabla(tableName);
        }
    }

    private Set<String> obtenerTablasExistentes() {
        Set<String> tablas = new HashSet<>();
        entityManager.getMetamodel().getEntities().forEach(entity -> {
            String tableName = entity.getJavaType().getSimpleName().toLowerCase();
            tablas.add(tableName);
        });
        return tablas;
    }

    private void limpiarTabla(String tableName) {
        try {
            entityManager.createNativeQuery("DELETE FROM " + tableName).executeUpdate();
        } catch (Exception e) {
            System.err.println("Error limpiando tabla: " + tableName + " - " + e.getMessage());
        }
    }
}
