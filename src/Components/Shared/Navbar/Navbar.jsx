import React from "react";
import { Link } from "react-router-dom";

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
      </ul>
    </div>
  );
}
