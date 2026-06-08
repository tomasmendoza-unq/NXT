import { useEffect, useState } from "react";
import { useGetPreviewCart } from "../../cart/hooks/use-get-preview-cart";
import { FormFacturation } from "./components/formFacturation/FormFacturation";
import { OrderSummary } from "./components/orderSummary/OrderSummary";
import {
    initialFacturationForm,
    type FacturationForm,
} from "../types/FacturationForm.t";
import "./style/Checkout.css";

export const Checkout = () => {
    const { fetch, items } = useGetPreviewCart();
    const [formData, setFormData] = useState<FacturationForm>(
        initialFacturationForm,
    );

    useEffect(() => {
        fetch();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                e.target instanceof HTMLInputElement &&
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
        }));
    };

    const onCheckout = () => {
        // Aquí iría la lógica para procesar el pago y finalizar la compra
        console.log("Procesando compra con los siguientes datos:");
        console.log("Información de facturación:", formData);
        console.log("Items en el pedido:", items);
    };

    return (
        <section className="checkout-container">
            <FormFacturation
                formData={formData}
                onChange={handleChange}
            />
            <OrderSummary
                items={items}
                onCheckout={onCheckout}
            />
        </section>
    );
};
