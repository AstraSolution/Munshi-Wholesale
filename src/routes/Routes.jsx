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
        path: "shop",
        element: <Shop />,
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
  {
    path: "dashboard/Home",
    element: <Dashboard />,
  },
]);

export default router;
