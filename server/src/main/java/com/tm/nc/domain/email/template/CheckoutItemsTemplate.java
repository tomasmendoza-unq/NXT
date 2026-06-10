package com.tm.nc.domain.email.template;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.ItemCheckout;
import com.tm.nc.domain.productDetail.model.ProductDetail;

public class FacturationDetailTemplate {


    public static String build(Checkout checkout) {
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
                        title(checkout),
                        itemsGrid(checkout),
                        paymentInfo()
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
                            background-color: #f5f5f5;
                            font-family: Arial, sans-serif;
                        }

                        .container {
                            max-width: 800px;
                            margin: auto;
                            background: white;
                            padding: 32px;
                        }

                        .title {
                            margin-bottom: 24px;
                        }

                        .payment-box {
                            background: #f1f1f1;
                            border-radius: 8px;
                            padding: 16px;
                            margin-top: 24px;
                            line-height: 1.8;
                        }

                        .checkout-table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 24px;
                        }

                        .checkout-table th,
                        .checkout-table td {
                            border: 1px solid #dddddd;
                            padding: 14px;
                            vertical-align: middle;
                        }

                        .checkout-table th {
                            background-color: #f5f5f5;
                            text-align: left;
                        }

                        .product-info {
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                        }

                        .product-name {
                            font-size: 15px;
                        }

                        .product-size {
                            font-weight: bold;
                        }

                        .product-image {
                            width: 60px;
                            height: 60px;
                            object-fit: cover;
                        }

                        .total-row td {
                            font-size: 18px;
                            font-weight: bold;
                        }
                    </style>
                </head>
                """;
    }

    private static String title(Checkout checkout) {
        return """
                <h2 class="title">
                    Hola %s, recibimos tu pedido #%d!
                </h2>
                """
                .formatted(
                        checkout.getClient().getName(),
                        checkout.getId()
                );
    }

    private static String itemsGrid(Checkout checkout) {
        StringBuilder rows = new StringBuilder();

        for (ItemCheckout item : checkout.getItems()) {
            rows.append(itemRow(item));
        }

        return """
                <table class="checkout-table">

                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>

                    <tbody>

                        %s

                        <tr class="total-row">
                            <td colspan="2">
                                Total
                            </td>

                            <td>
                                %s
                            </td>
                        </tr>

                    </tbody>

                </table>
                """
                .formatted(
                        rows,
                        money(checkout.getTotal())
                );
    }

    private static String itemRow(ItemCheckout item) {
        ProductDetail detail = item.getProductDetail();

        return """
                <tr>

                    <td>
                        <div class="product-info">

                            <div class="product-name">
                                %s
                            </div>

                            <div class="product-size">
                                Talle (arg): %d
                            </div>

                            <img
                                class="product-image"
                                src="%s"
                                alt="%s"
                            />

                        </div>
                    </td>

                    <td>
                        %d
                    </td>

                    <td>
                        %s
                    </td>

                </tr>
                """
                .formatted(
                        detail.getName(),
                        detail.getSize(),
                        detail.getImage(),
                        detail.getName(),
                        item.getQuantity(),
                        money(item.getUnitPrice() * item.getQuantity())
                );
    }

    private static String paymentInfo() {
        return """
                <div class="payment-box">
                    <div>0000085700204299554921</div>
                    <div>Alias: importadosbased</div>
                    <div>Nahuel Andres Ariola</div>
                    <div>No aceptamos MercadoPago debido a las comisiones.</div>
                </div>

                <p>
                    Para confirmar el pedido envianos el comprobante
                    indicando el número de pedido.
                </p>

                <p>
                    <strong>Tenés 24 hs para realizar el pago.</strong>
                    Luego de ese plazo el pedido podrá cancelarse automáticamente.
                </p>
                """;
    }

    private static String money(Double amount) {
        return "$%,.2f"
                .formatted(amount)
                .replace(",", "_")
                .replace(".", ",")
                .replace("_", ".");
    }
}