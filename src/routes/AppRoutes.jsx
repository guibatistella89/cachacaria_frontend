import React from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../auth/AuthContext"; // Importando o AuthProvider
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Limazinho from "../pages/Products/Produto_limaozinho";
import Vodka from "../pages/Products/Product_vodka";
import Menta from "../pages/Products/Product_menta";
import Maracuja from "../pages/Products/Product_maracuja";
import Coco from "../pages/Products/Product_coco";
import Canelinha from "../pages/Products/Product_canelinha";
import Bitter from "../pages/Products/Product_bitter";
import Banana from "../pages/Products/Product_banana";
import Amendoim from "../pages/Products/Product_amendoim";
import Cachaca from "../pages/Products/Product_cachaca";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile";
import Catalog from "../pages/Catalog";

const AppRoutes = () => {
  return (
    <AuthProvider> {/* Envolvendo todas as rotas com o AuthProvider */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cachaca" element={<Cachaca />} />
        <Route path="/limaozinho" element={<Limazinho />} />
        <Route path="/amendoim" element={<Amendoim />} />
        <Route path="/banana" element={<Banana />} />
        <Route path="/bitter" element={<Bitter />} />
        <Route path="/canelinha" element={<Canelinha />} />
        <Route path="/coco" element={<Coco />} />
        <Route path="/maracuja" element={<Maracuja />} />
        <Route path="/menta" element={<Menta />} />
        <Route path="/vodka" element={<Vodka />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
