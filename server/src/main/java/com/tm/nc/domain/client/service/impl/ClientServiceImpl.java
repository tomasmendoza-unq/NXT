package com.tm.nc.domain.client.service.impl;

import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.client.service.ClientService;
import com.tm.nc.domain.email.service.EmailService;
import com.tm.nc.domain.user.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    private final UserService userService;

    private final EmailService emailService;

    public ClientServiceImpl(UserService userService, EmailService emailService) {
        this.userService = userService;
        this.emailService = emailService;
    }

    @Override
    public Client generateTemporal(Client client) {
        String uuid = UUID.randomUUID().toString();

        client.setPassword(uuid);

        Client saved = (Client) userService.save(client);

        emailService.sendAccountTemporalEmail(saved,uuid);

        return saved;
    }
}
