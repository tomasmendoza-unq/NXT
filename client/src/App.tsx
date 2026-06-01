import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/pages/Home";
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
                    path="/about"
                    element={<h1>About</h1>}
                />
            </Route>
        </Routes>
    );
}

export default App;
