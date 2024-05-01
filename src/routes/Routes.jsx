import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import AboutUs from "../pages/aboutUs/AboutUs";
import FAQ from "../pages/faq/FAQ";
import ProductDetails from "../pages/productDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/details",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

export default router;
