import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/pages/Home";
import { ProductDetail } from "./features/product/pages/productDetail/ProductDetail";
import { MainLayout } from "./shared/layouts/MainLayout";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/product/:id"
                    element={<ProductDetail />}
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
