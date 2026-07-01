import { Link } from "react-router-dom";

export const HeroSection = () => {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: "url('/hero-franky.png')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
            }}
        >
            <div className="hero-overlay">
                <h1>Tu próximo par te está esperando</h1>
                <p>Zapatillas originales · Envío a todo el país</p>
                <Link to="/products">Ver catálogo</Link>
            </div>
        </section>
    );
};
