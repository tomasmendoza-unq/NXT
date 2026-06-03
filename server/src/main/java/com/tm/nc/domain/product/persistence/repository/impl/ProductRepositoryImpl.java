package com.tm.nc.domain.product.persistence.repository.impl;

import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.color.persistence.repository.ColorRepository;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.persistence.repository.ProductRepository;
import com.tm.nc.domain.color.persistence.sql.ColorSQLDAO;
import com.tm.nc.domain.product.persistence.sql.ProductSQLDAO;
import com.tm.nc.shared.exception.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepositoryImpl implements ProductRepository {

    private final ProductSQLDAO productSQLDAO;
    private final ColorRepository colorRepository;

    public ProductRepositoryImpl(ProductSQLDAO productSQLDAO, ColorRepository colorRepository) {
        this.productSQLDAO = productSQLDAO;
        this.colorRepository = colorRepository;
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
        List<Color> colors = colorRepository.saveAll(product.getColors());
        product.setColors(colors);
        return productSQLDAO.save(product);
    }
}
