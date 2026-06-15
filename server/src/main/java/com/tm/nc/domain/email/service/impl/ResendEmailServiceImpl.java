package com.tm.nc.domain.email.service.impl;

import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;
import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.email.service.EmailService;
import com.tm.nc.domain.email.template.AccountTemporalTemplate;
import com.tm.nc.domain.email.template.FacturationEmailTemplate;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service("resendEmailService")
@Transactional
public class ResendEmailServiceImpl implements EmailService {

    private final Resend resend;

    @Value("${RESEND_EMAIL}")
    private String from;

    public ResendEmailServiceImpl(
            @Value("${resend.api-key}") String apiKey
    ) {
        this.resend = new Resend(apiKey);
    }

    @Override
    public void sendEmail(String to, String subject, String text) {
        sendHtmlEmail(to, subject, text);
    }

    @Override
    public void sendHtmlEmail(String to, String subject, String html) {
        try {
            CreateEmailOptions params = CreateEmailOptions.builder()
                    .from(from)
                    .to(to)
                    .subject(subject)
                    .html(html)
                    .build();

            resend.emails().send(params);

        } catch (ResendException e) {
            throw new RuntimeException("Error enviando email", e);
        }
    }

    @Override
    public void sendFacturationEmail(Client client, Checkout checkout) {
        String html = FacturationEmailTemplate.build(
                client.getFullName(),
                checkout.getId(),
                checkout
        );

        sendHtmlEmail(
                client.getEmail(),
                "Orden de compra",
                html
        );
    }

    @Override
    public void sendAccountTemporalEmail(Client client, String password) {

        String html = AccountTemporalTemplate.build(
                client.getFullName(),
                client.getEmail(),
                password
        );

        sendHtmlEmail(
                client.getEmail(),
                "Cuenta temporal",
                html
        );
    }
}