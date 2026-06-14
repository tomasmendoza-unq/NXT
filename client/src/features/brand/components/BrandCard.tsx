import type { BrandProps } from "../../../shared/types/Brand";
import { BrandImage } from "./BrandImage";

export const BrandCard = ({ image, name }: BrandProps) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-shadow">
            <BrandImage
                image={image}
                name={name}
            />
            <div className="px-3 py-3 text-center">
                <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
            </div>
        </div>
    );
};
