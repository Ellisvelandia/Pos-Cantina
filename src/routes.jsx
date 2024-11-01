import { Routes, Route } from "react-router-dom";
import Dashboard from "./sections/Dashboard";
import Products from "./sections/Products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      {/* <Route path="/sales" element={<Sales />} /> */}
      {/* <Route path="/clients" element={<Clients />} /> */}
    </Routes>
  );
};

export default AppRoutes;
