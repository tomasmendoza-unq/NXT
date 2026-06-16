package com.tm.nc.domain.brand.service.impl;

import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.brand.persistence.SQL.BrandSQLDAO;
import com.tm.nc.domain.brand.service.BrandService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class BrandServiceImpl implements BrandService {

    private final BrandSQLDAO brandSQLDAO;

    public BrandServiceImpl(BrandSQLDAO brandSQLDAO) {
        this.brandSQLDAO = brandSQLDAO;
    }

    @Override
    public List<Brand> getAll() {
        return brandSQLDAO.findAll();
    }

    @Override
    public Brand save(Brand brand) {
        return brandSQLDAO.save(brand);
    }
}
