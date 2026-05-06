package com.tm.nc.features.brand.controller;

import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.brand.service.BrandService;
import com.tm.nc.features.brand.controller.dto.BrandResponseDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/product")
@Tag(name = "Brand", description = "Operaciones relacionadas con la gestión de las marcas")
public class BrandControllerREST {

    private final BrandService brandService;

    public BrandControllerREST(BrandService brandService) {
        this.brandService = brandService;
    }


    @GetMapping
    public ResponseEntity<List<BrandResponseDTO>> getBrands(){
        List<Brand> brands = brandService.getAll();

        List<BrandResponseDTO> response = brands.stream().map(BrandResponseDTO::fromModel).toList();

        return ResponseEntity.ok(response);
    }
}
