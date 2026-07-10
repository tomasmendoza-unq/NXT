import "./style/NotFound.css";

export const NotFound = () => {
    return (
        <section className="not-found">
            <figure className="not-found__card">
                <img
                    className="not-found__image"
                    src="https://res.cloudinary.com/dvkvlpq07/image/upload/v1783715701/12772199-f780-4c87-94c6-7c7866c12119_njouwa.jpg"
                    alt="Página no encontrada"
                />
                <figcaption className="not-found__caption">
                    La página que buscás no existe o fue movida.
                </figcaption>
            </figure>
        </section>
    );
};
