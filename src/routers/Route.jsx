import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import WishList from "../components/WishList/WishList";

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
        path: "/wishlist",
        element: <WishList></WishList>,
      },
    ],
  },
]);
export default router;
