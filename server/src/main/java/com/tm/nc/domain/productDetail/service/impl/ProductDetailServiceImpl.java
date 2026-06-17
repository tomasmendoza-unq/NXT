package com.tm.nc.domain.productDetail.service.impl;

import com.tm.nc.domain.productDetail.model.ProductDetail;
import com.tm.nc.domain.productDetail.persistence.sql.ProductDetailsSQLDAO;
import com.tm.nc.domain.productDetail.service.ProductDetailService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProductDetailServiceImpl implements ProductDetailService {

    private final ProductDetailsSQLDAO productDetailsSQLDAO;

    public ProductDetailServiceImpl(ProductDetailsSQLDAO productDetailsSQLDAO) {
        this.productDetailsSQLDAO = productDetailsSQLDAO;
    }

    @Override
    public ProductDetail save(ProductDetail detail) {
        return productDetailsSQLDAO.save(detail);
    }
}
