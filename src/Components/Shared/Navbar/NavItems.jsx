import React, { useState } from "react";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import { Button } from "@material-tailwind/react";
import CustomLink from "./CustomLink";
import { Link } from "react-router-dom";

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = (
    <>
      <li>
        <CustomLink path={"/"}>Home</CustomLink>
      </li>
      <li>
        <CustomLink path={"/shop"}>Shop</CustomLink>
      </li>
      <li>
        <CustomLink path={"/aboutUs"}>AboutUs</CustomLink>
      </li>
      <li>
        <CustomLink path={"/faq"}>FAQ</CustomLink>
      </li>
    </>
  );

  return (
    <nav className="">
      <div className="bg-yellow-600 py-6 md:py-3 -mt-20 md:mt-0">
        <div className="container mx-auto flex justify-between items-center">
          {/* menu for medium and large device  */}
          <div>
            <ul className="hidden md:flex items-center space-x-6">
              {menuItems}
            </ul>
          </div>

          {/* login button */}
          <div className="flex items-center">
            <Link to={"/login"}>
              <Button className="hidden md:flex" color="red">
                Login
              </Button>
            </Link>

            {/* hamburger Icon for mobile */}
            <button
              onClick={toggleNavbar}
              className="md:hidden text-white hover:text-gray-300 focus:outline-none ml-4"
            >
              {isOpen ? (
                <XIcon className="h-7 w-7 text-gray-900" />
              ) : (
                <MenuAlt3Icon className="h-7 w-7 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* responsive menu for mobile */}
      <div className="z-50 relative ">
        <div className="absolute w-full bg-[#fffffff3] pb-8">
          <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col space-y-2 mt-6 mx-4">{menuItems}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavItems;
