import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/pages/Home";
import { MainLayout } from "./shared/layouts/main/MainLayout";
import { productRoutes } from "./features/product/routes/Product.routes";
import { cartRoutes } from "./features/cart/routes/Cart.routes";
import { checkoutRoutes } from "./features/checkout/routes/Checkout.routes";
import { ToastProvider } from "./features/toast/provider/ToastProvider";
import { ToastListener } from "./features/toast/emitter/ToastListener";

function App() {
    return (
        <ToastProvider>
            <ToastListener />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    {productRoutes}
                    {cartRoutes}
                    {checkoutRoutes}
                    <Route
                        path="*"
                        element={<h1>NOT FOUND</h1>}
                    />
                </Route>
            </Routes>
        </ToastProvider>
    );
}

export default App;
