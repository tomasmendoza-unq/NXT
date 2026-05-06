interface BrandImageProps {
    image: string;
    name: string;
}

export const BrandImage = ({ image, name }: BrandImageProps) => {
    return (
        <div className="relative overflow-hidden bg-gray-100 w-full aspect-square flex items-center justify-center">
            <img
                src={image}
                alt={name}
                className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
            />
        </div>
    );
};
