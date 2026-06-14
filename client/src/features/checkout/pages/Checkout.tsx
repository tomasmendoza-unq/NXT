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
import { Modal } from "../../../shared/components/modal/Modal";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../../shared/components/loadingSpinner/LoadingSpinner";

export const Checkout = () => {
    const { fetch, items, isLoading } = useGetPreviewCart();
    const [formData, setFormData] = useState<FacturationForm>(
        initialFacturationForm,
    );
    const {
        checkout,
        showSuccessMessage,
        setShowSuccessMessage,
        checkoutData,
        isLoading: isCheckoutLoading,
    } = useCheckout();

    const navigate = useNavigate();

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
                e.target instanceof HTMLInputElement
                    ? e.target.value
                    : e.target.value,
        }));
    };

    const handleCheckout = async () => {
        await checkout(formData);
    };

    const onCloseModal = () => {
        setShowSuccessMessage(false);
        navigate("/client/orders");
    };

    return (
        <section className="checkout-container">
            {(isLoading || isCheckoutLoading) && <LoadingSpinner overlay />}
            <h1>Detalles de facturación</h1>
            {items.length === 0 ? (
                <h1>Tu carrito está vacío.</h1>
            ) : (
                <div className="checkout-content">
                    <FormFacturation
                        formData={formData}
                        onChange={handleChange}
                        onCheckout={handleCheckout}
                    />
                    <OrderSummary items={items} />
                </div>
            )}

            <Modal
                isOpen={showSuccessMessage}
                onClose={onCloseModal}
                title="¡Compra exitosa!"
            >
                <p>Tu pedido fue procesado correctamente.</p>
                <p>Inicie sesion con los datos que le llego al mail.</p>
                {checkoutData && (
                    <p>Código de confirmación: {checkoutData.id}</p>
                )}
            </Modal>
        </section>
    );
};
