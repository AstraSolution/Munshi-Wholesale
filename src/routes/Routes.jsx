import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard_Layout from "../pages/dashboard/Dashboard_Layout";
import Profile_Page from "../pages/user_dashboard/Profile_Page";
import My_Order_Page from "../pages/user_dashboard/My_Order_Page";
import Shop from "../pages/shop/Shop";
import Checkout from "../pages/checkout/Checkout";
import AboutUs from "../pages/aboutUs/AboutUs";
import FAQ from "../pages/faq/FAQ";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Wish_List from "../pages/wishlist/Wish_List";
import DashboardHome from "../pages/admindashboard/DashboardHome";
import AllOrders from "../pages/admindashboard/AllOrders";
import AllUsers from "../pages/admindashboard/AllUsers";
import AddProducts from "../pages/admindashboard/AddProducts";
import Carts from "../pages/carts/Carts";
import User_Dashboard_Home from "../pages/user_dashboard/Dashboard_Home/User_Dashboard_Home";
import ContactUs from "../pages/contactUs/ContactUs";

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
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "carts",
        element: <Carts />,
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
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "wishlist",
        element: <Wish_List></Wish_List>,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard_Layout></Dashboard_Layout>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/home",
        element: <User_Dashboard_Home></User_Dashboard_Home>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile_Page></Profile_Page>,
      },

      {
        path: "/dashboard/all-Orders",
        element: <AllOrders></AllOrders>
      },
      {
        path: "/dashboard/all-Users",
        element: <AllUsers></AllUsers>
      },
      {
        path: "/dashboard/add-Products",
        element: <AddProducts></AddProducts>
      },
     
      {
        path: "/dashboard/my_order",
        element: <My_Order_Page></My_Order_Page>,
      },
    ],
  },
]);

export default router;
