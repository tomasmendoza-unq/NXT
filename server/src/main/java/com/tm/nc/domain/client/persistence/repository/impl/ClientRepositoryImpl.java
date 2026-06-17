package com.tm.nc.domain.client.persistence.repository.impl;

import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.client.persistence.repository.ClientRepository;
import com.tm.nc.domain.email.service.EmailService;
import com.tm.nc.domain.user.service.UserService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.time.Clock;
import java.time.LocalDateTime;
import java.util.UUID;

@Repository
public class ClientRepositoryImpl implements ClientRepository {
    private final EmailService emailService;

    private final UserService userService;

    private final Clock clock;


    public ClientRepositoryImpl(UserService userService, @Qualifier("systemClock") Clock clock, @Qualifier("resendEmailService")EmailService emailService) {
        this.userService = userService;
        this.clock = clock;
        this.emailService = emailService;
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
}
