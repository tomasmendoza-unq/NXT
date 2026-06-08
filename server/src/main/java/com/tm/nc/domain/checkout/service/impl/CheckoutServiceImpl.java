package com.tm.nc.domain.checkout.service.impl;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.CheckoutIdempotency;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import com.tm.nc.domain.checkout.persistence.sql.CheckoutDAOSQL;
import com.tm.nc.domain.checkout.persistence.sql.CheckoutIdempotencyDAO;
import com.tm.nc.domain.checkout.service.CheckoutService;
import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.client.persistence.sql.ClientSQLDAO;
import com.tm.nc.domain.productDetail.model.ProductDetail;
import com.tm.nc.domain.productDetail.persistence.sql.ProductDetailsSQLDAO;
import com.tm.nc.features.checkout.controller.dto.request.ItemCheckoutRequestDTO;
import com.tm.nc.shared.exception.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@Transactional
public class CheckoutServiceImpl implements CheckoutService {

    private final CheckoutDAOSQL checkoutDAOSQL;

    private final ProductDetailsSQLDAO productDetailsSQLDAO;

    private final ClientSQLDAO clientSQLDAO;
    private final CheckoutIdempotencyDAO checkoutIdempotencyDAO;

    public CheckoutServiceImpl(CheckoutDAOSQL checkoutDAOSQL, ProductDetailsSQLDAO productDetailsSQLDAO, ClientSQLDAO clientSQLDAO, CheckoutIdempotencyDAO checkoutIdempotencyDAO) {
        this.checkoutDAOSQL = checkoutDAOSQL;
        this.productDetailsSQLDAO = productDetailsSQLDAO;
        this.clientSQLDAO = clientSQLDAO;
        this.checkoutIdempotencyDAO = checkoutIdempotencyDAO;
    }

    @Override
    public Checkout generateCheckout(
            Checkout model,
            List<ItemCheckoutRequestDTO> itemCheckoutRequestDTOS,
            String idempotencyKey) {


        Optional<CheckoutIdempotency> existing =
                checkoutIdempotencyDAO.findById(idempotencyKey);

        if (existing.isPresent()) {
            return checkoutDAOSQL.findById(existing.get().getCheckoutId())
                    .orElseThrow();
        }


        List<Long> idsDetail = itemCheckoutRequestDTOS.stream()
                .map(ItemCheckoutRequestDTO::idDetail)
                .toList();

        Map<Long, ProductDetail> detailsById = productDetailsSQLDAO.findAllById(idsDetail)
                .stream()
                .collect(Collectors.toMap(
                        ProductDetail::getId,
                        Function.identity()
                ));

        itemCheckoutRequestDTOS.forEach(item -> {
            ProductDetail detail = Optional.ofNullable(
                            detailsById.get(item.idDetail()))
                    .orElseThrow(() -> new EntityNotFoundException(
                            ProductDetail.class.getName(),
                            item.idDetail()
                    ));

            model.addItem(detail, item.quantity());
        });

        Client client = clientSQLDAO.save(model.getClient());

        model.setClient(client);

        Checkout saved = checkoutDAOSQL.save(model);

        checkoutIdempotencyDAO.save(
                new CheckoutIdempotency(idempotencyKey, saved.getId(), LocalDateTime.now())
        );

        return saved;
    }

    @Override
    public Checkout findById(Long id) {
        return checkoutDAOSQL.findById(id).orElseThrow(() -> new EntityNotFoundException(Checkout.class.getName(), id));
    }

    @Override
    public List<Checkout> findAllByStatus(String status) {
        CheckoutStatus checkoutStatus = CheckoutStatus.fromString(status);

        return checkoutDAOSQL.findAllByStatus(checkoutStatus);
    }
}
