import "./WhatsappButton.css";

type WhatsappButtonProps = {
    phoneNumber: string;
    message?: string;
};

const DEFAULT_MESSAGE = "Hola, quisiera hacer una consulta.";

const normalizePhoneNumber = (phoneNumber: string) =>
    phoneNumber.replace(/\D/g, "");

export const WhatsappButton = ({
    phoneNumber,
    message = DEFAULT_MESSAGE,
}: WhatsappButtonProps) => {
    const cleanPhoneNumber = normalizePhoneNumber(phoneNumber);
    const href = `https://wa.me/54${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            className="whatsapp-button"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
            title="Contactar por WhatsApp"
        >
            <img
                className="whatsapp-button__icon"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
            />
        </a>
    );
};
