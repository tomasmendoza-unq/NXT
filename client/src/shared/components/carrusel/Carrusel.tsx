import "./style/Carrusel.css";
export const Carrusel = ({
    images,
    onImageSelect,
}: {
    images: string[];
    onImageSelect: (image: string) => void;
}) => {
    return (
        <section className="carrusel">
            {images.map((image, index) => (
                <img
                    className="carrusel-image"
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    onClick={() => onImageSelect(image)}
                />
            ))}
        </section>
    );
};
