import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white">
      <ul className=" flex justify-center gap-5 py-4">
        <li>
          <Link to={"/"}>Home</Link>
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
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li>
          <Link to={"/checkout"}>Checkout</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>

          <Link to={"/wishlist"}>
            <div className="flex  items-center ">
              <div className="relative ">
                <div className="  absolute left-4 -top-2 ">
                  <p className="flex h-2 w-2 items-center justify-center bg-[#FFA500] p-3 rounded-full  text-sm text-white">73</p>
                </div>
                <FaRegHeart className="text-2xl " />

              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
