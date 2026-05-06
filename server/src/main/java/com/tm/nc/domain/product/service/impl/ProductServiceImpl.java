package com.tm.nc.domain.product.service.impl;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.persistence.repository.ProductRepository;
import com.tm.nc.domain.product.service.ProductService;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public Page<Product> getAll(int page, int size) {
        return productRepository.getAll(page, size);
    }

    @Override
    public Product getById(Long id) {
        return productRepository.getById(id);
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }
}
