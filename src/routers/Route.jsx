import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";

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
    ],
  },
]);
export default router;
