package com.tm.nc.domain.product.persistence.repository.impl;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.persistence.repository.ProductRepository;
import com.tm.nc.domain.product.persistence.sql.ProductSQLDAO;
import com.tm.nc.shared.exception.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    private final ProductSQLDAO productSQLDAO;

    public ProductRepositoryImpl(ProductSQLDAO productSQLDAO) {
        this.productSQLDAO = productSQLDAO;
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
