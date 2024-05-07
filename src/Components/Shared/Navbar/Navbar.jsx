import { Link } from "react-router-dom";
import { FaRegHeart , FaShoppingCart} from "react-icons/fa";
import useWishlistProducts from "../../../Hooks/useWishlistProducts";

export default function Navbar() {

  const [wishlistProduct] = useWishlistProducts()

  return (
    <div className="bg-gray-800 text-white">
      <ul className=" flex justify-center flex-wrap gap-5 py-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/aboutUs"}>AboutUs</Link>
        </li>
        <li>
          <Link to={"/faq"}>FAQ</Link>
        </li>
        <li>
          <Link to={"/carts"}>Carts</Link>
        </li>

        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/wishlist"}>
            <div className="flex  items-center ">
              <div className="relative ">
                <div className="  absolute left-4 -top-2 ">
                  <p className="flex h-2 w-2 items-center justify-center bg-[#FF9D00] p-3 rounded-full  text-sm ">
                   <span className="text-white"> {wishlistProduct?.length}</span>
                  </p>
                </div>
                <FaRegHeart className="text-2xl " />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/carts"}>
            <div className="flex  items-center ">
              <div className="relative ">
                <div className="  absolute left-4 -top-2 ">
                  <p className="flex h-2 w-2 items-center justify-center bg-[#FFA500] p-3 rounded-full  text-sm text-white">
                   
                  </p>
                </div>
                <FaShoppingCart className="text-2xl " />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
