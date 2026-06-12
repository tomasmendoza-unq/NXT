import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/pages/Home";
import { MainLayout } from "./shared/layouts/main/MainLayout";
import { productRoutes } from "./features/product/routes/Product.routes";
import { cartRoutes } from "./features/cart/routes/Cart.routes";
import { checkoutRoutes } from "./features/checkout/routes/Checkout.routes";
import { ToastProvider } from "./features/toast/provider/ToastProvider";
import { ToastListener } from "./features/toast/emitter/ToastListener";
import { authRoutes } from "./features/auth/routes/Auth.routes";
import { AuthLayout } from "./features/auth/layout/AuthLayout";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import { adminRoutes } from "./features/admin/routes/Admin.routes";

function App() {
    return (
        <AuthProvider>
            <ToastProvider>
                <ToastListener />
                <Routes>
                    <Route element={<AuthLayout />}>{authRoutes}</Route>
                    <Route element={<MainLayout />}>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        {adminRoutes}
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
        </AuthProvider>
    );
}

export default App;
