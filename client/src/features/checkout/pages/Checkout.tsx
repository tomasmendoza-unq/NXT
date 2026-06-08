import { useEffect, useState } from "react";
import { useGetPreviewCart } from "../../cart/hooks/use-get-preview-cart";
import { FormFacturation } from "./components/formFacturation/FormFacturation";
import { OrderSummary } from "./components/orderSummary/OrderSummary";
import {
    initialFacturationForm,
    type FacturationForm,
} from "../types/FacturationForm.t";

export const Checkout = () => {
    const { fetch, items } = useGetPreviewCart();
    const [formData, setFormData] = useState<FacturationForm>(
        initialFacturationForm,
    );

    useEffect(() => {
        fetch();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section className="checkout-container">
            <FormFacturation
                formData={formData}
                onChange={handleChange}
            />
            <OrderSummary items={items} />
        </section>
    );
};
