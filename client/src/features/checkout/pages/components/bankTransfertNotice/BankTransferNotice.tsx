import "./style/BankTransferNotice.css";

export const BankTransferNotice = () => {
    return (
        <div className="bank-transfer-notice">
            <h4 className="bank-transfer-notice-title">
                Transferencia bancaria directa
            </h4>

            <p className="bank-transfer-notice-text">
                Luego de realizar el pedido necesitamos el número de pedido,
                para enviarte tus zapas lo más rápido posible. Gracias por
                confiar en <strong>NXT STEPS</strong>.
            </p>
        </div>
    );
};
