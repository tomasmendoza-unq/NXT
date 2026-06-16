import type { Product } from "../../../shared/types/Product";
import type { ProductRequestDTO } from "../api/types/product-request";

export const toProductPreview = (dto: ProductRequestDTO): Product => ({
    id: 0,
    model: dto.model,
    brand: { image: "", name: "" },
    colors: dto.colors.map((c, ci) => ({
        id: ci,
        name: c.name,
        color: c.color,
        image: c.image,
        gallery: c.gallery,
        details: c.details.map((d, di) => ({
            id: di,
            size: Number(d.size),
            price: Number(d.price),
            quantity: Number(d.quantity),
        })),
    })),
});
