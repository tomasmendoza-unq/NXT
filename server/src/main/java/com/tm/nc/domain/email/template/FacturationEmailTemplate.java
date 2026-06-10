package com.tm.nc.domain.email.template;

import com.tm.nc.domain.checkout.model.Checkout;

public class FacturationEmailTemplate {

    public static String build(
            String customerName,
            Long orderNumber,
            Checkout checkout
    ) {
        return """
                <!DOCTYPE html>
                <html lang="es">
                %s
                <body>
                    <div class="container">
                        %s
                        %s
                        %s
                        %s
                    </div>
                </body>
                </html>
                """
                .formatted(
                        head(),
                        title(customerName, orderNumber),
                        CheckoutItemsTemplate.build(checkout),
                        paymentInfo(),
                        confirmationInfo()
                );
    }

    private static String head() {
        return """
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body {
                            margin: 0;
                            padding: 32px;
                            background: #f5f5f5;
                            font-family: Arial, sans-serif;
                        }

                        .container {
                            max-width: 700px;
                            margin: auto;
                            background: white;
                            padding: 32px;
                        }

                        .payment-box {
                            background: #f1f1f1;
                            border-radius: 8px;
                            padding: 16px;
                            margin: 24px 0;
                            line-height: 1.8;
                        }

                        .title {
                            font-size: 32px;
                            margin-bottom: 24px;
                        }

                        .confirmation {
                            font-size: 18px;
                            line-height: 1.7;
                        }

                        .highlight {
                            font-weight: bold;
                        }
                    </style>
                </head>
                """;
    }

    private static String title(String customerName, Long orderNumber) {
        return """
                <h1 class="title">
                    Hola %s, recibimos tu pedido #%d!
                </h1>
                """
                .formatted(customerName, orderNumber);
    }

    private static String paymentInfo() {
        return """
                <div class="payment-box">
                    <div>0000003100005971783536</div>
                    <div>Alias: tomas.065.aldea.mp</div>
                    <div>Tomas Ismael Mendoza</div>
                </div>
                """;
    }

    private static String confirmationInfo(
    ) {
        return """
                <div class="confirmation">
                    <p>
                        Para confirmar el pedido contactanos por WhatsApp
                        01162707458 o mail
                        <a href="mailto:nxtstepsinfo@gmail.com">nxtstepsinfo@gmail.com</a>
                        indicando tu número de pedido y comprobante de pago.
                    </p>

                    <p>
                        <span class="highlight">
                            ¡Esperamos tus novedades!
                        </span>

                        Tenés <span class="highlight">24 hs</span>
                        para realizar el pago; de lo contrario,
                        tu pedido se cancelará automáticamente.
                    </p>
                </div>
                """;
    }
}