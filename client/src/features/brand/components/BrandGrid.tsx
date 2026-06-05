import type { BrandProps } from "../../../shared/types/Brand";
import { BrandCard } from "./BrandCard";
import styles from "./styles/BrandGrid.module.css";

export const BrandsGrid = ({ brands }: { brands: BrandProps[] }) => {
    return (
        <div className={styles.brandsGrid}>
            {brands.map((brand, index) => (
                <BrandCard
                    key={index}
                    {...brand}
                />
            ))}
        </div>
    );
};
