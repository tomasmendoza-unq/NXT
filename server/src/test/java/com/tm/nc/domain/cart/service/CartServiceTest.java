package com.tm.nc.domain.cart.service;

import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.cart.model.Cart;
import com.tm.nc.domain.cart.model.ItemCart;
import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import com.tm.nc.domain.product.service.ProductService;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.service.UserService;
import com.tm.nc.features.cart.controller.dto.request.CartRequestDTO;
import com.tm.nc.shared.service.ResetService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
public class CartServiceTest {

    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;

    @Autowired
    private ResetService resetService;

    @Autowired
    private ProductService productService;


    private User user;

    private CartRequestDTO requestGood;

    private CartRequestDTO requestWrong;

    private Product product;

    private Color black;

    private ProductDetail detailSize39Black;

    private Brand brand;


    @BeforeEach
    void setUp() {
        user = userService.generateUser();

        brand = Brand.builder()
                .name("nike")
                .logo("kkk")
                .build();

        product = Product.builder()
                .brand(brand)
                .name("Nike Nike Nike Nike")
                .model("jordan")
                .build();

        detailSize39Black = ProductDetail.builder()
                .size(39)
                .price(200D)
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .quantity(10)
                .build();


        black = Color.builder()
                .name("black")
                .color("#000000")
                .details(List.of(detailSize39Black))
                .build();

        product.addColor(List.of(
                black
        ));

        product = productService.save(product);

        black = product.getColors().getFirst();

        detailSize39Black = black.getDetails().get(0);

        requestGood = new CartRequestDTO(
                black.getId(),
                detailSize39Black.getId(),
                9
        );

        requestWrong = new CartRequestDTO(
                black.getId(),
                detailSize39Black.getId(),
                2
        );
    }

    @Test
    public void addToCart(){

        cartService.addToCart(requestGood, user);

        Cart cart = cartService.findById(user.getCart().getId());

        assertEquals(1, cart.getItems().size());

        ItemCart item = cart.getItems().getFirst();

        assertEquals(black.getId(), item.getColor().getId());
        assertEquals(detailSize39Black.getId(), item.getProductDetail().getId());
        assertEquals(requestGood.quantity(), item.getQuantity());

        //assertThrows(InsufficientStockException.class, () -> cartService.addToCart(requestWrong, user));
    }

    @AfterEach
    public void tearDown() {
        resetService.resetAll();
    }
}
