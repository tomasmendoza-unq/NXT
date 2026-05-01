import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/pages/Home";

function About() {
    return (
        <div className="flex items-center justify-center h-screen bg-purple-500 text-white">
            <h1 className="text-4xl font-bold">Acerca de</h1>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/about"
                element={<About />}
            />
        </Routes>
    );
}

export default App;
