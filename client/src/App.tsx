import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/pages/Home";
import { ProductDetail } from "./features/product/pages/ProductDetail";
import { MainLayout } from "./shared/layouts/MainLayout";
import { AdminPanel } from "./features/admin/pages/AdminPanel";
import { AddProduct } from "./features/admin/pages/AddProduct";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/editProduct" element={<h1>Editar producto</h1>} />
        <Route
          path="/admin/deleteProduct"
          element={<h1>Eliminar producto</h1>}
        />
        <Route path="/about" element={<h1>About</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
