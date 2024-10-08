import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from '../pages/Register';
import Home from '../pages/Home';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}  />
      <Route path="/home" element={<Home />}  />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
