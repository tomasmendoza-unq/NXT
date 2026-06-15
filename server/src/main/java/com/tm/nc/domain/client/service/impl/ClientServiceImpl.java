package com.tm.nc.domain.client.service.impl;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.enums.CheckoutStatus;
import com.tm.nc.domain.checkout.persistence.sql.CheckoutDAOSQL;
import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.client.persistence.sql.ClientSQLDAO;
import com.tm.nc.domain.client.service.ClientService;
import com.tm.nc.domain.email.service.EmailService;
import com.tm.nc.domain.user.service.UserService;
import com.tm.nc.shared.exception.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Clock;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    private final UserService userService;

    private final Clock  clock;

    private final EmailService emailService;

    private final CheckoutDAOSQL checkoutDAOSQL;

    private final ClientSQLDAO clientDAOSQL;

    public ClientServiceImpl(UserService userService, @Qualifier("systemClock") Clock clock, @Qualifier("resendEmailService")EmailService emailService, CheckoutDAOSQL checkoutDAOSQL, ClientSQLDAO clientDAOSQL) {
        this.userService = userService;
        this.clock = clock;
        this.emailService = emailService;
        this.checkoutDAOSQL = checkoutDAOSQL;
        this.clientDAOSQL = clientDAOSQL;
    }

    @Override
    public Client generateTemporal(Client client) {
        String uuid = UUID.randomUUID().toString();

        client.setPassword(uuid);

        client.setTemporal(true);
        client.setExpirationDate(LocalDateTime.now(clock).plusDays(1));

        Client saved = (Client) userService.save(client);

        emailService.sendAccountTemporalEmail(saved,uuid);


        return saved;
    }

    @Override
    public Page<Checkout> findAllByStatus(String status, int page, int size, Long idClient) {
        Client client = clientDAOSQL.findById(idClient).orElseThrow(() -> new EntityNotFoundException(Client.class.getName(), idClient));
        Pageable  pageable = PageRequest.of(page, size);
        return status.isBlank() ? checkoutDAOSQL.findAllByClient(client, pageable): checkoutDAOSQL.findAllByStatusAndClient(CheckoutStatus.fromString(status),client, pageable);
    }
}
