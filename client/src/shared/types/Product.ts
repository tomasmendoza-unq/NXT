import type { BrandProps } from "./Brand";
import type { Color } from "./Color";

export interface Product {
    id: number;
    model: string;
    colors: Color[];
    brand: BrandProps;
}
