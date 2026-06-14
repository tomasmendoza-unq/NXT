package com.tm.nc.domain.product.service;

import com.tm.nc.domain.product.model.Product;
import org.springframework.data.domain.Page;

public interface ProductService {
    Page<Product> getAll(int page, int size);

    Product getById(Long id);

    Product save(Product product);
}
