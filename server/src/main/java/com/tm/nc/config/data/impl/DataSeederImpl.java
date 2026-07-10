package com.tm.nc.config.data.impl;

import com.tm.nc.config.data.DataSeeder;
import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.brand.service.BrandService;
import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.news.model.News;
import com.tm.nc.domain.news.service.NewsService;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import com.tm.nc.domain.product.service.ProductService;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.service.UserService;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
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

    private final BrandService brandService;

    private final NewsService newsService;

    public DataSeederImpl(ProductService productService, UserService userService, BrandService brandService, NewsService newsService) {
        this.productService = productService;
        this.userService = userService;
        this.brandService = brandService;
        this.newsService = newsService;
    }

    @Override
    public void run(String... args) throws Exception {
        Brand brand = brandService.save(Brand.builder()
                .name("Nike")
                .logo("https://acdn-us.mitiendanube.com/stores/006/133/691/products/nike-logo-24edf4f26f5a40025b17503629706845-1024-1024.webp")
                .build());

        Brand brand2 = Brand.builder()
                .name("New Balance")
                .logo("https://upload.wikimedia.org/wikipedia/commons/4/4d/New_balance.png")
                .build();

        Brand brand3 = brandService.save(Brand.builder()
                .name("Adidas")
                .logo("https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png")
                .build());

        Brand brand4 = brandService.save(Brand.builder()
                .name("Vans")
                .logo("https://guiaimpresion.com/wp-content/uploads/2024/03/8-3.png")
                .build());

        Product product = Product.builder()
                .brand(brand2)
                .model("New balance 530")
                .build();

        List<ProductDetail> detailsAzul   = createDetails(90000D, 10);
        List<ProductDetail> detailsMarron = createDetails(90000D, 10);
        List<ProductDetail> detailsWhite  = createDetails(90000D, 10);

        Color azul = Color.builder()
                .name("Azul")
                .color("#090A10")
                .image("https://basedpremium.com/wp-content/uploads/2025/03/s-l960-6-600x754.webp")
                .gallery(List.of(
                        "https://basedpremium.com/wp-content/uploads/2025/03/s-l1600-4-2-600x800.webp",
                        "https://basedpremium.com/wp-content/uploads/2025/03/s-l1600-2-2-600x800.webp",
                        "https://basedpremium.com/wp-content/uploads/2025/03/s-l1600-1-2-600x800.webp"
                ))
                .details(detailsAzul)
                .build();

        Color marron = Color.builder()
                .name("Marron")
                .color("#261D16")
                .image("https://basedpremium.com/wp-content/uploads/2026/01/new-balance-530-turtledove-mushroommr530asmsnrkickz-8423200.jpg")
                .gallery(List.of(
                        "https://basedpremium.com/wp-content/uploads/2026/01/m_wp_68d826b049e17b85d5e560bd.webp",
                        "https://basedpremium.com/wp-content/uploads/2026/01/m_wp_68d826b0c4e7b4d284d38259.webp",
                        "https://basedpremium.com/wp-content/uploads/2026/01/m_wp_68d826b0b09b7c2cb33e80b2.webp"
                ))
                .details(detailsMarron)
                .build();

        Color white = Color.builder()
                .name("white")
                .color("#EAEEF2")
                .image("https://basedpremium.com/wp-content/uploads/2025/03/d144effa-11c5-450f-ba8a-75d73a7813c2.jpg")
                .details(detailsWhite)
                .build();

        // Asignar color a cada detalle ────────────────────────────────────────
        detailsAzul.forEach(d   -> d.setColor(azul));
        detailsMarron.forEach(d -> d.setColor(marron));
        detailsWhite.forEach(d  -> d.setColor(white));
        // ────────────────────────────────────────────────────────────────────

        product.addColor(List.of(azul, white, marron));

        productService.save(product);

        saveAdmin();
        createNews();
    }

    public void saveAdmin(){
        userService.save(User.builder()
                        .email(adminEmail)
                        .firstName("Tomas")
                        .password(adminPassword)
                        .enabled(true)
                        .lastName("Mendoza")
                        .role("ADMIN")
                .build());
    }

    List<ProductDetail> createDetails(double price, int quantity) {
        List<ProductDetail> details = new ArrayList<>();
        for (int size = 34; size <= 44; size++) {
            details.add(ProductDetail.builder()
                    .size(size)
                    .price(price)
                    .quantity(quantity)
                    .build());
        }
        return details;
    }

    void createNews() {
        List<News> news = new ArrayList<>(List.of(
                News.builder()
                        .link("https://www.google.com")
                        .title("Google")
                        .image("https://res.cloudinary.com/dvkvlpq07/image/upload/v1782951205/Screenshot_2026-07-01_211012_lukvkq.png")
                        .build()
        ));

        news.forEach(newsService::save);
    }
}
