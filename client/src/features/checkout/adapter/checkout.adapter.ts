import type { CheckoutRequestDTO } from "../api/types/CheckoutRequestDTO";
import type { Checkout } from "../types/checkout.t";

export const checkoutToRequestDTO = (
    checkout: Checkout,
): CheckoutRequestDTO => ({
    client: {
        firstName: checkout.facturationForm.firstName,
        lastName: checkout.facturationForm.lastName,
        address: checkout.facturationForm.address,
        province: checkout.facturationForm.province,
        city: checkout.facturationForm.city,
        postalCode: checkout.facturationForm.postalCode,
        phone: checkout.facturationForm.phone,
        email: checkout.facturationForm.email,
    },
    notes: checkout.facturationForm.notes,
    itemCheckoutRequestDTO: checkout.items.map((item) => ({
        idDetail: item.idDetail,
        quantity: item.quantity,
    })),
});
