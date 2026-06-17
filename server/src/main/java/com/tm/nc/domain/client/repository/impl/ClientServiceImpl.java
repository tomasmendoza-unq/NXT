package com.tm.nc.domain.client.repository.impl;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import com.tm.nc.domain.checkout.persistence.sql.CheckoutDAOSQL;
import com.tm.nc.domain.checkout.service.CheckoutService;
import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.client.persistence.sql.ClientSQLDAO;
import com.tm.nc.domain.client.repository.ClientService;
import com.tm.nc.features.checkout.controller.dto.request.ItemCheckoutRequestDTO;
import com.tm.nc.shared.exception.BusinessException;
import com.tm.nc.shared.exception.EntityNotFoundException;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    private final CheckoutDAOSQL checkoutDAOSQL;

    private final ClientSQLDAO clientDAOSQL;

    private final CheckoutService checkoutService;

    public ClientServiceImpl( CheckoutDAOSQL checkoutDAOSQL, ClientSQLDAO clientDAOSQL, CheckoutService checkoutService) {
        this.checkoutDAOSQL = checkoutDAOSQL;
        this.clientDAOSQL = clientDAOSQL;
        this.checkoutService = checkoutService;
    }

    @Override
    public Page<Checkout> findAllByStatus(String status, int page, int size, Long idClient) {
        Client client = clientDAOSQL.findById(idClient).orElseThrow(() -> new EntityNotFoundException(Client.class.getName(), idClient));
        Pageable pageable = PageRequest.of(page, size);
        return status.isBlank() ? checkoutDAOSQL.findAllByClient(client, pageable): checkoutDAOSQL.findAllByStatusAndClient(CheckoutStatus.fromString(status),client, pageable);
    }

    @Override
    public Checkout findOrderById(Long idOrder) {
        return checkoutDAOSQL.findById(idOrder).orElseThrow(() -> new EntityNotFoundException(Checkout.class.getName(), idOrder));
    }

    @Override
    public Checkout generateCheckout(Checkout model, List<@Valid ItemCheckoutRequestDTO> itemCheckoutRequestDTOS, String idempotencyKey, Long idClient) {
        Client client = clientDAOSQL.findById(idClient).orElseThrow(() -> new EntityNotFoundException(Client.class.getName(), idClient));
        if(!client.isSameEmail(model.getClient().getEmail())) throw new BusinessException("Ingresar mismo mail al formulario");
        return checkoutService.generateCheckout(model, itemCheckoutRequestDTOS, idempotencyKey, client);
    }
}
