package com.tm.nc.domain.color.persistence.repository.impl;

import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.color.persistence.repository.ColorRepository;
import com.tm.nc.domain.color.persistence.sql.ColorSQLDAO;
import com.tm.nc.domain.product.model.ProductDetail;
import com.tm.nc.domain.product.persistence.sql.ProductDetailsSQLDAO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ColorRepositoryImpl implements ColorRepository {

    private final ProductDetailsSQLDAO productSQLDAO;
    private final ColorSQLDAO colorSQLDAO;

    public ColorRepositoryImpl(ProductDetailsSQLDAO productSQLDAO, ColorSQLDAO colorSQLDAO) {
        this.productSQLDAO = productSQLDAO;
        this.colorSQLDAO = colorSQLDAO;
    }


    @Override
    public List<Color> saveAll(List<Color> colors) {
        return colorSQLDAO.saveAll(colors);
    }
}
