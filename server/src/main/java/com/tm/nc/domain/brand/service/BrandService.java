package com.tm.nc.domain.brand.service;

import com.tm.nc.domain.brand.model.Brand;

import java.util.List;

public interface BrandService {
    List<Brand> getAll();

    Brand save(Brand brand);
}
