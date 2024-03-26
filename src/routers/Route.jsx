import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import MyCart from "../pages/myCart/MyCart";
import AllProducts from "../pages/AllProducts/AllProducts";
import WishList from "../components/WishList/WishList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CardDetails from "../shared/CardDetails/CardDetails";
// import AddProduct from "../pages/addProduct/AddProduct";

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
        path: "/my-cart",
        element: <MyCart />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/wishList",
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

    path: "/add-product",
    // element: <AddProduct />
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

    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "/dashboard/add-product",
        // element: <AddProduct />,
      },
    ],
  },
]);
export default router;
