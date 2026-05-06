interface ProductImageProps {
    image?: string;
    name: string;
}

export const ProductImage = ({ image, name }: ProductImageProps) => {
    if (!image) {
        return (
            <div className="relative overflow-hidden bg-gray-100 mb-2 w-full aspect-square flex items-center justify-center">
                <span className="text-gray-400">Sin imagen</span>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden bg-gray-100 mb-2 w-full aspect-square">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
};
