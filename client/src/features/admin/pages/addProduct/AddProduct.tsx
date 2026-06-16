import { ProductForm } from "../../../product/components/form/ProductForm";
import "./style/AddProduct.css";

export const AddProduct = () => {
    return (
        <section className="add-product-container">
            <h1>Crear Producto</h1>
            <ProductForm />
        </section>
    );
};
