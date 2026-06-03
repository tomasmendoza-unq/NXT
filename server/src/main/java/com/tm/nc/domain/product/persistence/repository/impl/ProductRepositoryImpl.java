package com.tm.nc.domain.product.persistence.repository.impl;

import com.tm.nc.domain.product.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.model.ProductDetail;
import com.tm.nc.domain.product.persistence.repository.ProductRepository;
import com.tm.nc.domain.product.persistence.sql.ColorSQLDAO;
import com.tm.nc.domain.product.persistence.sql.ProductDetailsSQLDAO;
import com.tm.nc.domain.product.persistence.sql.ProductSQLDAO;
import com.tm.nc.shared.exception.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    private final ProductSQLDAO productSQLDAO;
    private final ColorSQLDAO colorSQLDAO;

    public ProductRepositoryImpl(ProductSQLDAO productSQLDAO, ColorSQLDAO colorSQLDAO) {
        this.productSQLDAO = productSQLDAO;
        this.colorSQLDAO = colorSQLDAO;
    }

    @Override
    public Page<Product> getAll(int page, int size) {
        return productSQLDAO.findAll(PageRequest.of(page, size));
    }

    @Override
    public Product getById(Long id) {
        return productSQLDAO.findById(id).orElseThrow(() -> new EntityNotFoundException(Product.class.getName(), id));
    }

    @Override
    public Product save(Product product) {

        return productSQLDAO.save(product);
    }
}
