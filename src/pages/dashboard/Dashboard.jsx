import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Logo from "../../shared/logo/Logo";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSliderOpen, setIsSidebarOpen] = useState(true);

  const toggleSlider = () => {
    setIsSidebarOpen(!isSliderOpen);
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
                    : "py-2 px-3 hover:bg-yellow-300 hover:text-black text-lg font-semibold rounded-md transition-all duration-300"
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
                <button className="py-2 px-3 hover:bg-yellow-300 hover:text-black text-lg font-semibold rounded-md text-start w-full transition-all duration-300">
                  Home
                </button>
              </Link>
              <button className="py-2 px-3 hover:bg-yellow-300 hover:text-black text-lg font-semibold rounded-md text-start transition-all duration-300">
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

          <img
            src="https://i.ibb.co/9qmtc5b/person-1.jpg"
            className="size-10 object-cover rounded-full"
            alt=""
          />
        </div>
        {/* navbar end */}

        {/* main content start*/}
        <div className="p-2">
          <Outlet />
        </div>
        {/* main content end*/}
      </div>
    </div>
  );
};

export default Dashboard;
