import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import { ROUTES } from "../constants/routes";
import HomePage from "../pages/public/HomePage";
import CategoriesPage from "../pages/public/CategoriesPage";
import ProductsPage from "../pages/public/ProductsPage";
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import BuyerDashboardPage from "../pages/buyer/BuyerDashboardPage";
import SellerDashboardPage from "../pages/seller/SellerDashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path={ROUTES.AUTH.LOGIN} element={<LoginPage />} />

        <Route path={ROUTES.AUTH.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.AUTH.SELLER_REGISTER} element={<RegisterPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.BUYER.DASHBOARD} element={<BuyerDashboardPage />} />

        <Route
          path={ROUTES.SELLER.DASHBOARD}
          element={<SellerDashboardPage />}
        />
      </Route>

      {/* Default Route */}
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
