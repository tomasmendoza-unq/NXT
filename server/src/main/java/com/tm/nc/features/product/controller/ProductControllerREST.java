package com.tm.nc.features.product.controller;

import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.service.ProductService;
import com.tm.nc.features.product.controller.dto.ProductResponseDTO;
import com.tm.nc.shared.dto.PageResponseDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/product")
@Tag(name = "Product", description = "Operaciones relacionadas con la gestión de los productos")
public class ProductControllerREST {

    private final ProductService productService;

    public ProductControllerREST(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping()
    public ResponseEntity<PageResponseDTO<ProductResponseDTO>> getAllProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {

        Page<Product> products = productService.getAll(page,size);

        Page<ProductResponseDTO> productResponseDTOPage = products.map(ProductResponseDTO::fromModel);

        PageResponseDTO<ProductResponseDTO> response = PageResponseDTO.from(productResponseDTOPage);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{idProduct}")
    public ResponseEntity<ProductResponseDTO> getProductById(@PathVariable Long idProduct) {
        Product product = productService.getById(idProduct);

        ProductResponseDTO productResponseDTO = ProductResponseDTO.fromModel(product);

        return ResponseEntity.ok(productResponseDTO);
    }
}
