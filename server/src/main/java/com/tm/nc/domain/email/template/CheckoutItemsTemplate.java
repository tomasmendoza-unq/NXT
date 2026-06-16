package com.tm.nc.domain.email.template;

import com.tm.nc.domain.checkout.model.Checkout;
import com.tm.nc.domain.checkout.model.ItemCheckout;
import com.tm.nc.domain.productDetail.model.ProductDetail;

public class CheckoutItemsTemplate {

    private CheckoutItemsTemplate() {
    }

    public static String build(Checkout checkout) {
        StringBuilder rows = new StringBuilder();

        for (ItemCheckout item : checkout.getItems()) {
            rows.append(itemRow(item));
        }
        return """
                <table class="checkout-table" width="100%%" style="width: 100%%; border-collapse: collapse; text-align: left;">

                    <thead>
                        <tr>
                            <th style="padding-bottom: 10px;">Producto</th>
                            <th style="padding-bottom: 10px; text-align: center;">Cantidad</th>
                            <th style="padding-bottom: 10px; text-align: right;">Precio</th>
                        </tr>
                    </thead>

                    <tbody>

                        %s

                        <tr class="total-row">
                            <td colspan="2" style="text-align: right; padding-top: 15px; padding-right: 15px; font-weight: bold;">
                                Total
                            </td>

                            <td style="text-align: right; padding-top: 15px; font-weight: bold;">
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

            <td style="padding-bottom: 15px;">
                <div class="product-info">

                    <div class="product-name" style="font-weight: bold;">
                        %s
                    </div>

                    <div class="product-size" style="color: #555; margin-bottom: 5px;">
                        Talle: %d
                    </div>

                    <img
                        src="%s"
                        alt="%s"
                        width="80"
                        style="
                            width:80px;
                            height:80px;
                            object-fit:cover;
                            display:block;
                        "
                    />

                </div>
            </td>

            <td style="text-align: center; vertical-align: top; padding-top: 5px;">%d</td>

            <td style="text-align: right; vertical-align: top; padding-top: 5px;">%s</td>

        </tr>
        """
                .formatted(
                        detail.getName(),
                        detail.getSize(),
                        detail.getColor().getImage(),
                        detail.getName(),
                        item.getQuantity(),
                        money(item.getUnitPrice() * item.getQuantity())
                );
    }

    private static String money(Double amount) {
        return "$%,.2f"
                .formatted(amount)
                .replace(",", "_")
                .replace(".", ",")
                .replace("_", ".");
    }
}