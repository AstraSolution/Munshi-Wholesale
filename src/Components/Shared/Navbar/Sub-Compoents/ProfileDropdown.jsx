import { UserCircleIcon, UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { Button } from "@material-tailwind/react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { LuUserSquare2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

const Dropdown = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);

  const handleLogOut = () => {
    logOut();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded="true"
          className="mt-2"
        >
          {user && user.photoURL ? (
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-500"
              src={user.photoURL}
            />
          ) : (
            <UserCircleIcon className="h-9 w-9 text-gray-600" />
          )}

          {/* <img className="w-8" src={USER_ICON} alt="" /> */}
        </button>
      </div>

      {/* Dropdown menu */}
      {user && (
        <>
          {isOpen && (
            <div
              className="origin-top-right absolute right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="p-6 text-gray-600" role="none">
                <ul className="space-y-4">
                  <li className="text-center text-xl font-bold text-red-500 -mb-3">
                    {user && user.displayName}
                  </li>
                  <li className="text-center font-semibold text-gray-600">
                    {user && user.email}
                  </li>
                  <li>
                    {user && (
                      <hr className="border border-gray-300 w-3/4 mx-auto mb-4" />
                    )}
                  </li>
                  <li className="flex items-center gap-1 font-semibold">
                    <AiOutlineAppstore size={23} className="min-w-max" />
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="flex items-center gap-1 font-semibold">
                    <FiBox size={23} className="min-w-max" />
                    <Link to={"/dashboard/my_order"}>My Orders</Link>
                  </li>
                  <li className="flex items-center gap-1 font-semibold">
                    <LuUserSquare2 size={23} className="min-w-max" />
                    <Link to={"/dashboard/profile"}>Profile</Link>
                  </li>
                  <li className="flex items-center gap-1 font-semibold">
                    <IoSettingsOutline size={23} className="min-w-max" />
                    <Link to={"/dashboard/my_order"}>Settings</Link>
                  </li>
                  <li>
                    {user ? (
                      <Button
                        onClick={handleLogOut}
                        color="red"
                        className="capitalize flex justify-center items-center text-md gap-2 w-full "
                      >
                        Logout <FaArrowRightFromBracket />
                      </Button>
                    ) : (
                      <Link to={"/login"}>
                        <Button className="w-full" color="red">
                          Login
                        </Button>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dropdown;
