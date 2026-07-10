import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
import { clientRoutes } from "./features/client/routes/Client.routes";
import { NotFound } from "./features/home/pages/notFound/NotFound";

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
                        {clientRoutes}
                        {checkoutRoutes}
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Route>
                </Routes>
                <Analytics />
                <SpeedInsights />
            </ToastProvider>
        </AuthProvider>
    );
}

export default App;
