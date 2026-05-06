package com.tm.nc.config.data.impl;

import com.tm.nc.config.data.DataSeeder;
import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.product.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.model.ProductDetail;
import com.tm.nc.domain.product.service.ProductService;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
public class DataSeederImpl implements DataSeeder {

    private ProductService productService;

    private Product product;
    private Brand brand;
    private ProductDetail productDetail;
    private Color color;

    public DataSeederImpl(ProductService productService) {
        this.productService = productService;
    }

    @Override
    public void run(String... args) throws Exception {
        brand = Brand.builder()
                .name("nike")
                .logo("https://acdn-us.mitiendanube.com/stores/006/133/691/products/nike-logo-24edf4f26f5a40025b17503629706845-1024-1024.webp")
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

        product.addDetails(productDetail);

        productService.save(product);
    }
}
