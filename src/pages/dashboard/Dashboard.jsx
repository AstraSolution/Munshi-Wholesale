import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Logo from "../../shared/logo/Logo";
import { Link, NavLink } from "react-router-dom";

const Dashboard = () => {
  const [isSliderOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSlider = () => {
    setIsSidebarOpen(!isSliderOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    { label: "Profile", link: "/dashboard" },
    { label: "Add Product", link: "/dashboard/add-product" },
  ];

  return (
    <div className="flex">
      {/* slider start */}
      <div
        className={`w-64 h-screen bg-black text-white ${
          isSliderOpen ? "block" : "hidden"
        }`}
      >
        <div className="py-3 text-2xl text-center text-yellow-400">
          <Logo />
        </div>

        <div className="flex flex-col justify-stretch">
          <ul className="p-3 flex flex-col gap-3">
            {navLinks?.map((navLink, key) => (
              <NavLink
                key={key}
                to={navLink.link}
                className={({ isActiv, isPending }) =>
                  isPending
                    ? "pending"
                    : isActiv
                    ? "py-2 px-3 bg-yellow-300 text-lg font-semibold rounded-md"
                    : "py-2 px-3 hover:bg-yellow-200 hover:text-black text-lg font-semibold rounded-md"
                }
              >
                {navLink.label}
              </NavLink>
            ))}
          </ul>

          <div className="p-3">
            <hr />
            <div className="flex flex-col mt-2">
              <Link to="/">
                <button className="py-2 px-3 hover:bg-yellow-200 hover:text-black text-lg font-semibold rounded-md text-start w-full">
                  Home
                </button>
              </Link>
              <button className="py-2 px-3 hover:bg-yellow-200 hover:text-black text-lg font-semibold rounded-md text-start">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* slider end */}

      {/* navbar start */}
      <div className="w-full h-14 bg-black shadow-lg">
        <div className="flex justify-between items-center py-2 px-5">
          <button onClick={toggleSlider}>
            {isSliderOpen ? (
              <ChevronLeftIcon className="size-8 bg-yellow-400 hover:bg-yellow-500 p-1 rounded-full transition-all duration-300" />
            ) : (
              <ChevronRightIcon className="size-8 bg-yellow-400 hover:bg-yellow-500 p-1 rounded-full transition-all duration-300" />
            )}
          </button>

          <div className="relative">
            <img
              src="https://i.ibb.co/9qmtc5b/person-1.jpg"
              className="size-10 object-cover rounded-full cursor-pointer"
              alt=""
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 flex flex-col items-center gap-2 bg-yellow-500 w-44 p-3 rounded-md mt-1 text-white z-10">
                <h1 className="text-lg font-semibold">Resel Mia</h1>
                <button className="bg-black py-1 px-2 font-semibold rounded-md shadow-md hover:shadow">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        {/* navbar end */}

        {/* main content start*/}
        <div className="p-2">
          <h1>Dashboard content</h1>
        </div>
        {/* main content end*/}
      </div>
    </div>
  );
};

export default Dashboard;
