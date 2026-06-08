import { useEffect, useState } from "react";
import { useGetPreviewCart } from "../../cart/hooks/use-get-preview-cart";
import { FormFacturation } from "./components/formFacturation/FormFacturation";
import { OrderSummary } from "./components/orderSummary/OrderSummary";
import {
    initialFacturationForm,
    type FacturationForm,
} from "../types/FacturationForm.t";
import "./style/Checkout.css";
import { useCheckout } from "../hook/use-checkout";

export const Checkout = () => {
    const { fetch, items } = useGetPreviewCart();
    const [formData, setFormData] = useState<FacturationForm>(
        initialFacturationForm,
    );
    const { checkout } = useCheckout();

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

    const handleCheckout = async () => {
        await checkout(formData);
    };

    return (
        <section className="checkout-container">
            <FormFacturation
                formData={formData}
                onChange={handleChange}
            />
            <OrderSummary
                items={items}
                onCheckout={handleCheckout}
            />
        </section>
    );
};
