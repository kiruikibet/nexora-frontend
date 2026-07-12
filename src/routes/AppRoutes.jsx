import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import { ROUTES } from "../constants/routes";

// Temporary pages
const Home = () => <h1>Home Page</h1>;

const Login = () => <h1>Login Page</h1>;

const Register = () => <h1>Register Page</h1>;

const BuyerDashboard = () => <h1>Buyer Dashboard</h1>;

const SellerDashboard = () => <h1>Seller Dashboard</h1>;

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />

        <Route path={ROUTES.AUTH.REGISTER} element={<Register />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.BUYER.DASHBOARD} element={<BuyerDashboard />} />

        <Route path={ROUTES.SELLER.DASHBOARD} element={<SellerDashboard />} />
      </Route>

      {/* Default Route */}
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
