import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./hooks/pages/ProductsPage";
import { AboutPage } from "./hooks/pages/AboutPage";
import { Navigate } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigate />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
