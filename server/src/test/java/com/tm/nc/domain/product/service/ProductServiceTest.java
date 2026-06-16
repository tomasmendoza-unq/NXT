package com.tm.nc.domain.product.service;

import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.productDetail.model.ProductDetail;
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

        product = Product.builder()
                .brand(brand)
                .name("Nike Nike Nike Nike")
                .model("jordan")
                .build();

        ProductDetail detailSize39Black = ProductDetail.builder()
                .size(39)
                .price(200D)
                .quantity(10)
                .build();

        ProductDetail detailSize42Black = ProductDetail.builder()
                .size(42)
                .price(220D)
                .quantity(3)
                .build();

        ProductDetail detailSize40Red = ProductDetail.builder()
                .size(40)
                .price(210D)
                .quantity(7)
                .build();

        Color black = Color.builder()
                .name("black")
                .color("#000000")
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .gallery(List.of(
                        "https://img1.jpg",
                        "https://img2.jpg",
                        "https://img3.jpg"
                ))
                .details(List.of(
                        detailSize39Black,
                        detailSize42Black
                ))
                .build();

        Color red = Color.builder()
                .name("red")
                .color("#FF0000")
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .gallery(List.of(
                        "https://img4.jpg",
                        "https://img5.jpg"
                ))
                .details(List.of(detailSize40Red))
                .build();

        detailSize39Black.setColor(black);
        detailSize42Black.setColor(black);
        detailSize40Red.setColor(red);

        product.addColor(List.of(
                black,
                red
        ));
    }
    @Test
    public void createAndRecoverProduct(){
        Product saved = productService.save(product);
        assertNotNull(saved.getId(), "El producto guardado debe tener un ID");
        assertEquals(product.getName(), saved.getName(), "El nombre debe coincidir");
        assertEquals(product.getModel(), saved.getModel(), "El modelo debe coincidir");
        assertNotNull(saved.getBrand(), "La marca no debe ser nula");
        assertFalse(saved.getColors().isEmpty(), "Debe tener al menos un color");

        Product recovered = productService.getById(saved.getId());

        assertNotNull(recovered, "El producto recuperado no debe ser nulo");
        assertEquals(saved.getId(), recovered.getId(), "El ID debe coincidir");
        assertEquals(saved.getName(), recovered.getName(), "El nombre debe coincidir");
        assertEquals(2, recovered.getColors().size(), "Debe tener 2 colores");
    }


    @AfterEach
    public void tearDown() {
        resetService.resetAll();
    }
}
