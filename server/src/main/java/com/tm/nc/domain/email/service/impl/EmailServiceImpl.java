package com.tm.nc.domain.email.service.impl;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.email.service.EmailService;
import com.tm.nc.domain.email.template.FacturationEmailTemplate;
import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EmailServiceImpl implements EmailService {
    private final JavaMailSender mailSender;

    @Value("${admin.email}")
    private String from;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);

        mailSender.send(message);
    }

    @Override
    public void sendHtmlEmail(String to, String subject, String html) {
        try {
            MimeMessage message = mailSender.createMimeMessage();

            MimeMessageHelper helper =
                    new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(html, true);

            mailSender.send(message);
        } catch (Exception e) {
            throw new RuntimeException("Error enviando email", e);
        }
    }

    @Override
    public void sendFacturationEmail(Client client, Checkout checkout) {
        String html = FacturationEmailTemplate.build(
                client.getFullName(),
                checkout.getId()
        );

        sendHtmlEmail(client.getEmail(), "Orden de compra",  html);
    }

}
