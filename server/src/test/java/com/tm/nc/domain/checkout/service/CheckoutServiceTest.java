package com.tm.nc.domain.checkout.service;

import com.tm.nc.domain.brand.model.Brand;
import com.tm.nc.domain.cart.exception.InsufficientStockException;
import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.product.model.Product;
import com.tm.nc.domain.product.service.ProductService;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import com.tm.nc.domain.productDetail.service.ProductDetailService;
import com.tm.nc.features.checkout.controller.dto.request.CheckoutRequestDTO;
import com.tm.nc.features.checkout.controller.dto.request.ItemCheckoutRequestDTO;
import com.tm.nc.features.client.controller.dto.ClientRequestDTO;
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
public class CheckoutServiceTest {

    @Autowired
    private CheckoutService checkoutService;

    @Autowired
    private ResetService resetService;

    @Autowired
    private ProductService productService;

    private ClientRequestDTO client;

    private Product product;

    private Brand brand;

    private Color black;

    private ProductDetail detailSize39Black;

    private ProductDetail detailSize40Black;

    private CheckoutRequestDTO requestGood;

    private CheckoutRequestDTO requestWrong;

    private List<ItemCheckoutRequestDTO> items;

    @Autowired
    private ProductDetailService productDetailService;

    @BeforeEach
    public void setUp() {
        brand = Brand.builder()
                .name("nike")
                .logo("kkk")
                .build();

        product = Product.builder()
                .brand(brand)
                .model("New balance 540")
                .build();

        detailSize39Black = ProductDetail.builder()
                .size(39)
                .price(200D)

                .quantity(10)
                .build();

        detailSize40Black = ProductDetail.builder()
                .size(40)
                .price(200D)
                .quantity(10)
                .build();

        black = Color.builder()
                .name("black")
                .color("#000000")
                .image("https://authogar.vtexassets.com/arquivos/ids/214811-800-auto?v=638721421030330000&width=800&height=auto&aspect=true")
                .details(List.of(detailSize39Black, detailSize40Black))
                .build();

        product.addColor(List.of(
                black
        ));

        product = productService.save(product);

        black = product.getColors().getFirst();

        detailSize39Black = black.getDetails().get(0);

        detailSize40Black = black.getDetails().get(1);

        detailSize39Black.setColor(black);
        detailSize40Black.setColor(black);

        productDetailService.save(detailSize40Black);
        productDetailService.save(detailSize39Black);

        client = new ClientRequestDTO(
                "Tomás",
                "Mendoza",
                "Av. Siempre Viva 123",
                "Buenos Aires",
                "Quilmes",
                "1878",
                "1122334455",
                "tomas@gmail.com"
        );

        items = List.of(
                new ItemCheckoutRequestDTO(detailSize39Black.getId(), 2),
                new ItemCheckoutRequestDTO(detailSize40Black.getId(), 1)
        );

        requestGood = new CheckoutRequestDTO(
                client,
                "Hola",
                items
        );

        requestWrong = new CheckoutRequestDTO(
                client,
                "Hola",
                List.of(
                        new ItemCheckoutRequestDTO(detailSize39Black.getId(), 200),
                        new ItemCheckoutRequestDTO(detailSize40Black.getId(), 100)
                )
        );

    }

    @Test
    public void testCheckoutSuccess() {
        Checkout checkout = checkoutService.generateCheckout(requestGood.toModel(), requestGood.itemCheckoutRequestDTO(), "idempotencyKey");
        Checkout recovered = checkoutService.findById(checkout.getId());

        assertNotNull(recovered);
        assertNotNull(recovered.getId());

        assertNotNull(recovered.getClient());
        assertNotNull(recovered.getClient().getId());

        assertEquals(client.firstName(), recovered.getClient().getFirstName());
        assertEquals(client.lastName(), recovered.getClient().getLastName());
        assertEquals(client.email(), recovered.getClient().getEmail());
        assertEquals(client.phone(), recovered.getClient().getPhone());
        assertEquals(client.address(), recovered.getClient().getAddress());
        assertEquals(client.city(), recovered.getClient().getCity());
        assertEquals(client.province(), recovered.getClient().getProvince());
        assertEquals(client.postalCode(), recovered.getClient().getPostalCode());

        assertEquals("Hola", recovered.getNotes());

        assertEquals(2, recovered.getItems().size());

        assertEquals(
                detailSize39Black.getId(),
                recovered.getItems().get(0).getProductDetail().getId()
        );

        assertEquals(
                2,
                recovered.getItems().get(0).getQuantity()
        );

        assertEquals(
                detailSize40Black.getId(),
                recovered.getItems().get(1).getProductDetail().getId()
        );

        assertEquals(
                1,
                recovered.getItems().get(1).getQuantity()
        );

        assertEquals(
                200D,
                recovered.getItems().get(0).getUnitPrice()
        );

        assertEquals(
                200D,
                recovered.getItems().get(1).getUnitPrice()
        );

        assertEquals(
                CheckoutStatus.PENDING,
                recovered.getStatus()
        );
    }

    @Test
    public void testCheckoutFailure() {
        assertThrows(InsufficientStockException.class, () -> checkoutService.generateCheckout(requestWrong.toModel(), requestWrong.itemCheckoutRequestDTO(), "idempotencyKey"));
    }

    @Test
    public void testCheckoutIdempotency() {

        String idempotencyKey = "test-key-123";

        Checkout first = checkoutService.generateCheckout(
                requestGood.toModel(),
                requestGood.itemCheckoutRequestDTO(),
                idempotencyKey
        );

        Checkout second = checkoutService.generateCheckout(
                requestGood.toModel(),
                requestGood.itemCheckoutRequestDTO(),
                idempotencyKey
        );

        assertEquals(first.getId(), second.getId());

        assertEquals(first.getClient().getId(), second.getClient().getId());

        assertEquals(first.getItems().size(), second.getItems().size());

        assertEquals(first.getNotes(), second.getNotes());

        assertEquals(first.getStatus(), second.getStatus());
    }

    @Test
    public void testCheckoutIdempotencyDoesNotDuplicateRows() {

        String key = "idem-key-999";

        Checkout first = checkoutService.generateCheckout(
                requestGood.toModel(),
                requestGood.itemCheckoutRequestDTO(),
                key
        );

        checkoutService.generateCheckout(
                requestGood.toModel(),
                requestGood.itemCheckoutRequestDTO(),
                key
        );

        List<Checkout> all = checkoutService.findAllByStatus(
                CheckoutStatus.PENDING.name()
        );

        long count = all.stream()
                .filter(c -> c.getId().equals(first.getId()))
                .count();

        assertEquals(1, count);
    }

    @AfterEach
    public void tearDown() {
        resetService.resetAll();
    }
}
