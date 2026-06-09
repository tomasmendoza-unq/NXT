import type { FacturationForm } from "./FacturationForm.t";

export interface Checkout {
    facturationForm: FacturationForm;
    items: CheckoutItem[];
}

export interface CheckoutItem {
    idDetail: number;
    quantity: number;
}
