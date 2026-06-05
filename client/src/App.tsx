import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/pages/Home";

import { AdminPanel } from "./features/admin/pages/AdminPanel";
import { AddProduct } from "./features/admin/pages/AddProduct";
import { MainLayout } from "./shared/layouts/main/MainLayout";
import { productRoutes } from "./features/product/routes/Product.routes";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route
                    path="/"
                    element={<Home />}
                />
                {productRoutes}
                <Route
                    path="/admin"
                    element={<AdminPanel />}
                />
                <Route
                    path="/admin/addProduct"
                    element={<AddProduct />}
                />
                <Route
                    path="/admin/editProduct"
                    element={<h1>Editar producto</h1>}
                />
                <Route
                    path="/admin/deleteProduct"
                    element={<h1>Eliminar producto</h1>}
                />
                <Route
                    path="/about"
                    element={<h1>About</h1>}
                />
            </Route>
        </Routes>
    );
}

export default App;
