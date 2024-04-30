import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard_Layout from "../pages/dashboard/Dashboard_Layout";
import Profile_Page from "../pages/user_dashboard/Profile_Page";
import My_Order_Page from "../pages/user_dashboard/My_Order_Page";


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
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard_Layout></Dashboard_Layout>,
    children: [
      {
        path: "/dashboard",
        element: <Profile_Page></Profile_Page>
      },
     
      {
        path: "/dashboard/my_order",
        element: <My_Order_Page></My_Order_Page>
      },
     
    ],
  },

]);

export default router;
