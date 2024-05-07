import { UserCircleIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { Button } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { LuUserSquare2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import DropdownItem from "./DropdownItem";

const Dropdown = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState(false);

  // handle logout
  const handleLogOut = () => {
    logOut();
  };

  // toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // active status change
  useEffect(() => {
    if (user) {
      const interval = setInterval(() => {
        setActiveStatus((prevStatus) => !prevStatus);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [user]);

  return (
    <div className="relative inline-block text-left z-50">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded="true"
          className="mt-2 relative"
        >
          <div className="relative">
            {/* User profile image */}
            {user && user.photoURL ? (
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-500"
                src={user.photoURL}
                alt="User Profile"
              />
            ) : (
              <UserCircleIcon className="h-9 w-9 text-gray-600" />
            )}
            {/* Active status indicator */}
            {user && (
              <div
                className={`absolute bottom-0 right-0 ${
                  activeStatus ? "bg-green-500" : "bg-gray-500"
                } w-3 h-3 border-2 border-white rounded-full animate-ping`}
              />
            )}
          </div>
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
                    {user.displayName}
                  </li>
                  <li className="text-center font-semibold">{user.email}</li>
                  <li>
                    <hr className="border border-gray-300 w-3/4 mx-auto mb-4" />
                  </li>
                  {/* Menu items */}
                  <DropdownItem icon={<AiOutlineAppstore />} to="/dashboard">
                    Dashboard
                  </DropdownItem>
                  <DropdownItem icon={<FiBox />} to="/dashboard/my_order">
                    My Orders
                  </DropdownItem>
                  <DropdownItem
                    icon={<LuUserSquare2 />}
                    to="/dashboard/profile"
                  >
                    Profile
                  </DropdownItem>
                  <DropdownItem
                    icon={<IoSettingsOutline />}
                    to="/dashboard/my_order"
                  >
                    Settings
                  </DropdownItem>
                  {/* Logout button */}
                  <li>
                    <Button
                      onClick={handleLogOut}
                      color="red"
                      className="capitalize flex justify-center items-center text-md gap-2 w-full "
                    >
                      Logout <FaArrowRight />
                    </Button>
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
