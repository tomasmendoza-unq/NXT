package com.tm.nc.domain.email.template;

public class AccountTemporalTemplate {

    public static String build(
            String customerName,
            String email,
            String temporalPassword
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
                    </div>
                </body>
                </html>
                """
                .formatted(
                        head(),
                        title(customerName),
                        accountInfo(email, temporalPassword),
                        footer()
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

                        .title {
                            font-size: 32px;
                            margin-bottom: 24px;
                        }

                        .account-box {
                            background: #f1f1f1;
                            border-radius: 8px;
                            padding: 16px;
                            margin: 24px 0;
                            line-height: 1.8;
                        }

                        .label {
                            font-weight: bold;
                        }

                        .password {
                            font-size: 20px;
                            font-weight: bold;
                            letter-spacing: 1px;
                        }

                        .info {
                            font-size: 18px;
                            line-height: 1.7;
                        }
                    </style>
                </head>
                """;
    }

    private static String title(String customerName) {
        return """
                <h1 class="title">
                    Hola %s, tu cuenta fue creada correctamente.
                </h1>
                """
                .formatted(customerName);
    }

    private static String accountInfo(
            String email,
            String temporalPassword
    ) {
        return """
                <div class="account-box">
                    <div>
                        <span class="label">Usuario:</span>
                        %s
                    </div>

                    <div>
                        <span class="label">Contraseña temporal:</span>
                    </div>

                    <div class="password">
                        %s
                    </div>
                </div>
                """
                .formatted(email, temporalPassword);
    }

    private static String footer() {
        return """
                <div class="info">
                    <p>
                        Esta contraseña fue generada automáticamente para que
                        puedas acceder a tu cuenta.
                    </p>

                    <p>
                        Por motivos de seguridad, te recomendamos cambiarla
                        luego de iniciar sesión por primera vez.
                    </p>

                    <p>
                        Si no solicitaste esta cuenta, podés ignorar este correo.
                    </p>
                </div>
                """;
    }
}