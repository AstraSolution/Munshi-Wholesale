import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/outline";
import LOGO from "../../../assets/logo.gif";
import { Badge } from "@material-tailwind/react";
import StaggeredDropDown from "./Sub-Compoents/ProfileDropdown";
import SearchBar from "./Sub-Compoents/SearchBar";
import useWishlistProducts from "../../../Hooks/useWishlistProducts";
import useGetMyCarts from "../../../Hooks/useGetMyCarts";

export default function TopNav() {

  const [wishlistProduct] = useWishlistProducts();
  const wishlistItems = wishlistProduct?.length;

  const {myCarts} = useGetMyCarts();
  const cartItems = myCarts?.length;


  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-4 flex justify-between items-center flex-wrap">
        {/* logo  */}
        <h3 className="order-1">
          <Link to={"/"}>
            <img src={LOGO} className="w-32 md:w-24 lg:w-32" alt="" />
          </Link>
        </h3>

        {/* search bar  */}
        <div className="order-3 md:order-2 md:mt-0 w-[85%] md:w-[55%] lg:w-[50%] mt-4">
          <SearchBar />
        </div>

        {/* cart wishlist profile icons  */}
        <div className="order-2 md:order-3">
          <div className="flex items-center gap-6">
            <Link to={"/carts"}>
              <Badge className="px-2 py-1.5" content={cartItems}>
                <ShoppingCartIcon className="h-7 w-7 text-gray-600" />
              </Badge>
            </Link>

            <Link to={"/wishlist"}>
              <Badge className="px-2 py-1.5" content={wishlistItems}>
                <HeartIcon className="h-7 w-7 text-gray-600" />
              </Badge>
            </Link>

            {/* dropdown button  */}
            <StaggeredDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
