package com.tm.nc.domain.email.service;

import com.tm.nc.domain.email.template.FacturationEmailTemplate;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
public class EmailServiceTest {

    @Autowired
    @Qualifier("resendEmailService")
    private EmailService emailService;

    @Test
    public void testSendEmail() {
        emailService.sendEmail("tm1453766@gmail.com", "prueba", "holaaaaaaaaaaa");
    }

}
