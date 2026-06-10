package com.tm.nc.domain.email.service;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.client.model.Client;

public interface EmailService {
    void sendEmail(String to, String subject, String text);
    void sendHtmlEmail(String to, String subject, String html);

    void sendFacturationEmail(Client client, Checkout checkout);
}
