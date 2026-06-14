import { ProductForm } from "../components/AddProductForm";

export const AddProduct = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <h1>Add Products</h1>
            <ProductForm />
        </div>
    );
};
