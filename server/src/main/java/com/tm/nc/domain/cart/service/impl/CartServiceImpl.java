package com.tm.nc.domain.cart.service.impl;

import com.tm.nc.domain.cart.model.Cart;
import com.tm.nc.domain.cart.model.ItemCart;
import com.tm.nc.domain.cart.persistence.sql.CartSQLDAO;
import com.tm.nc.domain.cart.service.CartService;
import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.color.persistence.repository.ColorRepository;
import com.tm.nc.domain.product.model.ProductDetail;
import com.tm.nc.domain.product.persistence.sql.ProductDetailsSQLDAO;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.features.cart.controller.dto.CartRequestDTO;
import com.tm.nc.shared.exception.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    private final CartSQLDAO cartSQLDAO;

    private final ColorRepository colorRepository;

    private final ProductDetailsSQLDAO productDetailsSQLDAO;

    public CartServiceImpl(CartSQLDAO cartSQLDAO, ColorRepository colorRepository, ProductDetailsSQLDAO productDetailsSQLDAO) {
        this.cartSQLDAO = cartSQLDAO;
        this.colorRepository = colorRepository;
        this.productDetailsSQLDAO = productDetailsSQLDAO;
    }

    @Override
    public void addToCart(CartRequestDTO cartRequestDTO, User user) {
        ProductDetail detail = productDetailsSQLDAO.findById(cartRequestDTO.idDetails()).orElseThrow(() -> new EntityNotFoundException(ProductDetail.class.getName(), cartRequestDTO.idDetails()));
        Color color = colorRepository.findById(cartRequestDTO.idColor());

        ItemCart item = ItemCart.builder()
                .color(color)
                .productDetail(detail)
                .quantity(cartRequestDTO.quantity())
                .build();

        Cart cart = user.getCart();

        cart.addToCard(item);

        cartSQLDAO.save(cart);
    }

    @Override
    public Cart findById(Long idCart) {
        return cartSQLDAO.findById(idCart).orElseThrow(() -> new EntityNotFoundException(Cart.class.getName(), idCart));
    }
}
