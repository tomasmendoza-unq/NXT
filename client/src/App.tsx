import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/pages/Home";
import { MainLayout } from "./shared/layouts/main/MainLayout";
import { productRoutes } from "./features/product/routes/Product.routes";
import { Cart } from "./features/cart/pages/viewCart/Cart";
import { ToastProvider } from "./shared/provider/ToastProvider";

function App() {
    return (
        <ToastProvider>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    {productRoutes}
                    <Route
                        path="/cart"
                        element={<Cart />}
                    />

                    <Route
                        path="/about"
                        element={<h1>About</h1>}
                    />
                </Route>
            </Routes>
        </ToastProvider>
    );
}

export default App;
