import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSlider = () => {
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "SignUp", link: "/sign-up" },
  ];

  return (
    <div>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-5 px-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl md:text-3xl lg:text-4xl text-white">
              <Logo />
            </div>

            <form className="hidden lg:flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 w-96 rounded-l-lg text-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-400 py-2 px-3 rounded-r-lg text-lg font-semibold"
              >
                Search
              </button>
            </form>

            <div className="flex items-center gap-2">
              <ShoppingBagIcon className="size-6 md:size-8 lg:size-12 text-white" />
              <div className="lg:hidden">
                <Bars3Icon
                  className="size-6 md:size-8 text-white cursor-pointer"
                  onClick={openSlider}
                />
              </div>
              <div className="hidden lg:block">
                <p className="text-white font-semibold text-lg">My Cart:</p>
                <p className="text-yellow-500 font-semibold">0 - $0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 py-2">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-xl mx-auto flex justify-center lg:hidden">
            <form className="flex items-center w-full">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 w-full rounded-l-lg text-lg focus:outline-none"
              />
              <button type="submit">
                <MagnifyingGlassIcon className="size-11 py-2 px-3 bg-black text-white rounded-r-lg" />
              </button>
            </form>
          </div>

          <div className="hidden lg:flex justify-between items-center px-5">
            <ul className="flex justify-around items-center gap-10 text-xl font-semibold">
              {navLinks?.map((navLink, key) => (
                <li key={key}>
                  <NavLink
                    to={navLink.link}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "pb-1 border-b-2 border-black"
                        : "pb-1 hover:border-b-2 border-black transition-all duration-300"
                    }
                  >
                    {navLink.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <PhoneIcon className="size-9" />
              <div>
                <h1 className="font-semibold">Customer Support:</h1>
                <p className="text-xs">
                  <span className="hover:underline cursor-pointer">
                    +880 000 000 000
                  </span>{" "}
                  &{" "}
                  <span className="hover:underline cursor-pointer">
                    example@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider component */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={closeSlider}>
          <div className="fixed left-0 top-0 bottom-0 bg-white w-64">
            <div className="flex justify-between items-center py-2 px-3  bg-yellow-500">
              <h5 className="text-lg font-semibold">Menu</h5>
              <button onClick={closeSlider}>
                <XMarkIcon className="size-7" />
              </button>
            </div>
            <div>
              <ul className="p-2 flex flex-col">
                {navLinks?.map((navLink, key) => (
                  <NavLink
                    key={key}
                    to={navLink.link}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "py-1 px-2 rounded-md text-sm font-semibold bg-yellow-400"
                        : "py-1 px-2 rounded-md text-sm font-semibold"
                    }
                  >
                    {navLink.label}
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
