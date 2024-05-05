import React from "react";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import LOGO from "../../../assets/logo.gif";

import { Badge } from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";
import StaggeredDropDown from "./Sub-Compoents/ProfileDropdown";

export default function TopNav() {
  const { user, logOut } = useAuth();
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-4 flex justify-between items-center flex-wrap">
        {/* logo  */}
        <h3 className="order-1">
          <Link to={"/"}>
            <img src={LOGO} className="w-32" alt="" />
          </Link>
        </h3>

        {/* search bar  */}
        <div className="order-3 md:order-2 flex items-center mt-4 md:mt-0 w-[80%] md:w-[40%] lg:w-[50%] ">
          <input
            type="text"
            name="search"
            placeholder="Search by Product"
            className="px-4 py-3 rounded-lg w-full"
          />
          <span className="-ml-10">
            <SearchIcon className="h-6 w-6 text-gray-500" />
          </span>
        </div>

        {/* cart wishlist profile icons  */}
        <div className="order-2 md:order-3">
          <div className="flex items-center gap-6">
            <Badge content="5">
              <ShoppingCartIcon className="h-7 w-7 text-gray-600" />
            </Badge>

            <Badge content="3">
              <HeartIcon className="h-7 w-7 text-gray-600" />
            </Badge>

            {/* <UserCircleIcon className="h-7 w-7 text-gray-500" /> */}
            {/* dropdown button  */}
            <StaggeredDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
