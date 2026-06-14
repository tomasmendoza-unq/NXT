import type { BrandProps } from "./Brand";
import type { Color } from "./Color";

export interface Product {
    id: number;
    name: string;
    model: string;
    colors: Color[];
    brand: BrandProps;
}
