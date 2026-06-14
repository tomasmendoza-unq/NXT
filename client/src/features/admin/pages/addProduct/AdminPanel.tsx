import { NavigateButton } from "../../components/NavigateButton";

const buttonStyle =
    "rounded border text-[#000000] bg-[#bdc7ce] hover:bg-[#808a92] transition-colors";

export const AdminPanel = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Admin Panel</h1>
            <div className="flex flex-row justify-center items-center gap-5">
                <NavigateButton
                    customStyle={buttonStyle}
                    path="/admin/addProduct"
                >
                    Add Product
                </NavigateButton>
                <NavigateButton
                    customStyle={buttonStyle}
                    path="/admin/editProduct"
                >
                    Edit Product
                </NavigateButton>
                <NavigateButton
                    customStyle={buttonStyle}
                    path="/admin/deleteProduct"
                >
                    Delete Product
                </NavigateButton>
            </div>
        </div>
    );
};
