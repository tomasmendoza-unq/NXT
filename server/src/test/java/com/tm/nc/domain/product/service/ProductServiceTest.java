package com.tm.nc.domain.product.service;

import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.product.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.model.ProductDetail;
import com.tm.nc.features.product.controller.dto.ProductResponseDTO;
import com.tm.nc.shared.service.ResetService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
public class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @Autowired
    private ResetService resetService;

    private Product product;
    private Brand brand;

    @BeforeEach
    public void setUp() {
        brand = Brand.builder()
                .name("nike")
                .logo("kkk")
                .build();

        Color black = Color.builder()
                .name("black")
                .color("#000000")
                .build();

        Color red = Color.builder()
                .name("red")
                .color("#FF0000")
                .build();

        product = Product.builder()
                .brand(brand)
                .name("Nike Nike Nike Nike")
                .model("jordan")
                .build();

        ProductDetail detailSize39Black = ProductDetail.builder()
                .size(39)
                .price(200D)
                .color(black)
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .quantity(10)
                .product(product)
                .build();

        ProductDetail detailSize42Black = ProductDetail.builder()
                .size(42)
                .price(220D)
                .color(black)
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .quantity(3)
                .product(product)
                .build();

        ProductDetail detailSize40Red = ProductDetail.builder()
                .size(40)
                .price(210D)
                .color(red)
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .quantity(7)
                .product(product)
                .build();

        product.addDetails(List.of(
                detailSize39Black,
                detailSize42Black,
                detailSize40Red
        ));
    }

    @Test
    public void createAndRecoverProduct(){
        Product saved = productService.save(product);
        assertNotNull(saved.getId(), "El producto guardado debe tener un ID");
        assertEquals(product.getName(), saved.getName(), "El nombre debe coincidir");
        assertEquals(product.getModel(), saved.getModel(), "El modelo debe coincidir");
        assertNotNull(saved.getBrand(), "La marca no debe ser nula");
        assertFalse(saved.getDetails().isEmpty(), "Debe tener al menos un detalle");

        Product recovered = productService.getById(saved.getId());

        assertNotNull(recovered, "El producto recuperado no debe ser nulo");
        assertEquals(saved.getId(), recovered.getId(), "El ID debe coincidir");
        assertEquals(saved.getName(), recovered.getName(), "El nombre debe coincidir");
        assertEquals(3, recovered.getDetails().size(), "Debe tener 3 detalles");
    }

    @Test
    public void productResponseGroupsSizesByColor() {
        Product saved = productService.save(product);
        Product recovered = productService.getById(saved.getId());
        ProductResponseDTO response = ProductResponseDTO.fromModel(recovered);

        assertEquals(2, response.variants().size(), "Debe agrupar los detalles en 2 colores");

        var blackVariant = response.variants()
                .stream()
                .filter(variant -> "black".equals(variant.color().name()))
                .findFirst()
                .orElseThrow();

        assertEquals(2, blackVariant.sizes().size(), "Black debe tener 2 talles");
        assertTrue(
                blackVariant.sizes().stream().anyMatch(size -> size.size() == 39),
                "Black debe tener talle 39"
        );
        assertTrue(
                blackVariant.sizes().stream().anyMatch(size -> size.size() == 42),
                "Black debe tener talle 42"
        );
    }

    @AfterEach
    public void tearDown() {
        resetService.resetAll();
    }
}
