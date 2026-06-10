package com.tm.nc.config.data.impl;

import com.tm.nc.config.data.DataSeeder;
import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import com.tm.nc.domain.product.service.ProductService;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.service.UserService;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.List;
import org.springframework.beans.factory.annotation.Value;

@Component
@Profile("dev")
public class DataSeederImpl implements DataSeeder {

    @Value("${admin.email}")
    private String adminEmail;

    @Value("${admin.password}")
    private String adminPassword;

    private final ProductService productService;

    private final UserService userService;

    public DataSeederImpl(ProductService productService, UserService userService) {
        this.productService = productService;
        this.userService = userService;
    }

    @Override
    public void run(String... args) throws Exception {
        Brand brand = Brand.builder()
                .name("nike")
                .logo("https://acdn-us.mitiendanube.com/stores/006/133/691/products/nike-logo-24edf4f26f5a40025b17503629706845-1024-1024.webp")
                .build();

        Brand brand2 = Brand.builder()
                .name("nike")
                .logo("https://acdn-us.mitiendanube.com/stores/006/133/691/products/nike-logo-24edf4f26f5a40025b17503629706845-1024-1024.webp")
                .build();

        Product product = Product.builder()
                .brand(brand)
                .name("New balance 540")
                .model("jordan")
                .build();

        Product product2 = Product.builder()
                .brand(brand2)
                .name("Jordan 1")
                .model("Duke")
                .build();

        ProductDetail detailSize39Black = ProductDetail.builder()
                .size(39)
                .price(200D)
                .image("https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA0Z-1.jpg?v=1766067184&width=1380")
                .quantity(1)
                .gallery(List.of(
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA0Z-3.jpg?v=1766067238&width=128",
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA0Z-4.jpg?v=1766067238&width=128",
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA0Z-2.jpg?v=1766067238&width=128"
                ))
                .build();

        ProductDetail detailSize40Red = ProductDetail.builder()
                .size(40)
                .price(210D)
                .image("https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA1M-1.jpg?v=1766066883&width=1380")
                .quantity(7)
                .gallery(List.of(
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA1M-2.jpg?v=1766066927&width=690",
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA1M-4.jpg?v=1766066927&width=690",
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA1M-3.jpg?v=1766066927&width=690",
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA1M-3.jpg?v=1766066927&width=690",
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA1M-3.jpg?v=1766066927&width=690"
                ))
                .build();

        ProductDetail detailSize41White = ProductDetail.builder()
                .size(41)
                .price(215D)
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .quantity(1)
                .gallery(List.of(
                        "https://http2.mlstatic.com/D_NQ_NP_786651-MLA74664829441_022024-O.webp",
                        "https://http2.mlstatic.com/D_NQ_NP_786651-MLA74664829441_022024-O.webp",
                        "https://http2.mlstatic.com/D_NQ_NP_786651-MLA74664829441_022024-O.webp"
                ))
                .build();

        ProductDetail detailSize42Black = ProductDetail.builder()
                .size(42)
                .price(220D)
                .image("https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA0Z-1.jpg?v=1766067184&width=1380")
                .quantity(3)
                .gallery(List.of(
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA0Z-3.jpg?v=1766067238&width=128",
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA0Z-4.jpg?v=1766067238&width=128",
                        "https://www.kappastore.com.ar/cdn/shop/files/K134242KW-KA0Z-2.jpg?v=1766067238&width=128")
                )
                .build();

        ProductDetail detailSize4Black = ProductDetail.builder()
                .size(42)
                .price(220D)
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .quantity(3)
                .build();

        Color black = Color.builder()
                .name("black")
                .color("#000000")
                .details(List.of(detailSize39Black, detailSize42Black))
                .build();

        Color red = Color.builder()
                .name("red")
                .color("#FF0000")
                .details(List.of(detailSize40Red))
                .build();

        Color white = Color.builder()
                .name("white")
                .color("#FFFFFF")
                .details(List.of(detailSize41White))
                .build();

        Color blackDuke = Color.builder()
                .name("black")
                .color("#000000")
                .details(List.of( detailSize4Black))
                .build();

        detailSize39Black.setColor(black);
        detailSize42Black.setColor(black);
        detailSize41White.setColor(white);
        detailSize40Red.setColor(red);
        detailSize4Black.setColor(blackDuke);

        product.addColor(List.of(
                black,
                white,
                red
        ));

        product2.addColor(List.of(
                blackDuke
        ));

        productService.save(product);
        productService.save(product2);

        saveAdmin();
    }

    public void saveAdmin(){
        userService.save(User.builder()
                        .email(adminEmail)
                        .firstName("Tomas")
                        .password(adminPassword)
                        .enabled(true)
                        .lastName("Mendoza")
                        .role("admin")
                .build());
    }
}
