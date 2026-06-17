package com.tm.nc.domain.admin.service.impl;

import com.tm.nc.domain.admin.service.AdminService;
import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.brand.persistence.SQL.BrandSQLDAO;
import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import com.tm.nc.domain.checkout.persistence.sql.CheckoutDAOSQL;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.service.ProductService;
import com.tm.nc.features.product.controller.dto.request.ProductRequestDTO;
import com.tm.nc.shared.exception.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    private final CheckoutDAOSQL checkoutDAOSQL;
    private final ProductService productService;
    private final BrandSQLDAO brandDAO;

    public AdminServiceImpl(CheckoutDAOSQL checkoutDAOSQL, ProductService productService, BrandSQLDAO brandDAO) {
        this.checkoutDAOSQL = checkoutDAOSQL;
        this.productService = productService;
        this.brandDAO = brandDAO;
    }

    @Override
    public Page<Checkout> findAllByStatus(String status, int page, int size) {
        return status.isBlank() ? checkoutDAOSQL.findAll(PageRequest.of(page, size)) : checkoutDAOSQL.findAllByStatus(CheckoutStatus.fromString(status), PageRequest.of(page, size));
    }

    @Override
    public Product createProduct(Product model, ProductRequestDTO request) {
        model.setBrand(brandDAO.findById(request.brandId()).orElseThrow(()->new EntityNotFoundException(Brand.class.getName(), request.brandId())));

        return productService.save(model);
    }

    @Override
    public Checkout getOrderById(Long orderId) {
        return checkoutDAOSQL.findById(orderId).orElseThrow(() -> new EntityNotFoundException(Checkout.class.getName(), orderId));
    }


}
