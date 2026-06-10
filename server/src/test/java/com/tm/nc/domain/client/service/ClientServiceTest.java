package com.tm.nc.domain.client.service;


import com.tm.nc.config.FakeClockConfiguration;
import com.tm.nc.domain.auth.exception.UserExpiredException;
import com.tm.nc.domain.auth.service.AuthService;
import com.tm.nc.domain.client.model.Client;
import com.tm.nc.features.client.controller.dto.ClientRequestDTO;
import com.tm.nc.shared.exception.BusinessException;
import com.tm.nc.shared.service.ResetService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.time.Duration;
import java.time.Instant;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
@Import(FakeClockConfiguration.class)
@TestPropertySource(properties = "spring.main.allow-bean-definition-overriding=true")
class ClientServiceTest {

    @Autowired
    private FakeClockConfiguration fakeClock;

    @Autowired
    private ClientService clientService;

    @Autowired
    private AuthService authService;

    private Client client;

    @BeforeEach
    public void setUp() {
        fakeClock.setInstant(Instant.parse("2026-06-10T12:00:00Z"));

        client = new ClientRequestDTO(
                "Tomás",
                "Mendoza",
                "Av. Siempre Viva 123",
                "Buenos Aires",
                "Quilmes",
                "1878",
                "1122334455",
                "reservoreservo3@gmail.com"
        ).toModel();
    }

    @Test
    public void generateAccountTemporal_loginOk_cuentaNoExpirada() {
        clientService.generateTemporal(client);

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken("reservoreservo3@gmail.com", "test-password");

        assertDoesNotThrow(() -> authService.authUser(token));
    }

    @Test
    public void generateAccountTemporal_loginFalla_cuentaExpirada() {
        clientService.generateTemporal(client);

        fakeClock.advanceBy(Duration.ofHours(25));

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken("reservoreservo3@gmail.com", "test-password");

        assertThrows(UserExpiredException.class, () -> authService.authUser(token));
    }
}