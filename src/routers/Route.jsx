import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllProducts from "../pages/AllProducts/AllProducts";
import WishList from "../components/WishList/WishList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CardDetails from "../shared/CardDetails/CardDetails";
import ContactUs from "../pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "/allProducts/product/:id",
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/product/:id",
        element: <CardDetails></CardDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/contact-us",
    element: <ContactUs/>
  },
 
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);
export default router;
