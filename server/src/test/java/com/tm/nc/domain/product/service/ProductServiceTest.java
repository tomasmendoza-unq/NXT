package com.tm.nc.domain.product.service;

import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.product.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.model.ProductDetail;
import com.tm.nc.domain.product.persistence.repository.ProductRepository;
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
    private ProductDetail productDetail;
    private Color color;

    @BeforeEach
    public void setUp() {
        brand = Brand.builder()
                .name("nike")
                .logo("kkk")
                .build();

        color = Color.builder()
                .name("red")
                .color("#000000")
                .build();

        productDetail = ProductDetail.builder()
                .size(39)
                .price(200D)
                .color(color)
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .quantity(10)
                .build();

        product = Product.builder()
                .brand(brand)
                .name("Nike Nike Nike Nike")
                .model("jordan")
                .build();

        product.addDetails(List.of(productDetail));
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
        assertEquals(1, recovered.getDetails().size(), "Debe tener 1 detalle");
    }

    @AfterEach
    public void tearDown() {
        resetService.resetAll();
    }
}
