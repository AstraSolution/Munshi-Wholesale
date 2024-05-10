
import React, { useState, useEffect, useRef } from "react";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import { Button } from "@material-tailwind/react";
import CustomLink from "./CustomLink";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const NavItems = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut();
  };

  const menuItems = (
    <>
      <li>
        <CustomLink path={"/"} onClick={toggleNavbar}>Home</CustomLink>
      </li>
      <li>
        <CustomLink path={"/shop"} onClick={toggleNavbar}>Shop</CustomLink>
      </li>
      <li>
        <CustomLink path={"/aboutUs"} onClick={toggleNavbar}>AboutUs</CustomLink>
      </li>
      <li>
        <CustomLink path={"/faq"} onClick={toggleNavbar}>FAQ</CustomLink>
      </li>
    </>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false); 
  }, [location.pathname]); 


  return (
    <nav className="">
      <div className="bg-yellow-600 py-6 md:py-3 -mt-20 md:mt-0">
        <div className="container mx-auto flex justify-between items-center nav-container">
          {/* menu for medium and large device  */}
          <div>
            <ul className="hidden md:flex items-center space-x-10">
              {menuItems}
            </ul>
          </div>

          {/* login button */}
          <div className="flex items-center">
            {user ? (
              <Button
                onClick={handleLogOut}
                color="red"
                className="hidden capitalize md:flex justify-center items-center text-md gap-2 w-full "
              >
                Logout <FaArrowRightFromBracket />
              </Button>
            ) : (
              <Link className="hidden md:flex" to={"/login"}>
                <Button color="red">Login</Button>
              </Link>
            )}

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
      <div className="z-50 relative">
        <div ref={menuRef} className={`absolute w-full bg-[#fffffff3] ${isOpen ? "" : "hidden"}`}>
          <div className={`pb-8 md:hidden ${isOpen ? "block" : "hidden"} mt-6 mx-4`}>
            <ul className="flex flex-col space-y-2">{menuItems}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavItems;
