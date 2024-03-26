import {
  PhoneIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { useState } from "react";
import useAuth from "../../hooks/auth/useAuth";
import useMyCarts from "../../hooks/carts/useMyCarts";
// import { AiOutlineHeart } from 'react-icons/ai';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user, logOut } = useAuth();
  const { carts, totalPrice } = useMyCarts();




  const openSlider = () => {
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/allProducts" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact-us" },
    { label: "Sign In", link: "/login" },
    { label: "Register", link: "/register" },
    { label: "Dashboard", link: "/dashboard" },

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
              <button onClick={openCart}>
                <ShoppingBagIcon className="size-6 md:size-8 lg:size-12 text-white" />
              </button>
              <div className="lg:hidden">
                <Bars3Icon
                  className="size-6 md:size-8 text-white cursor-pointer"
                  onClick={openSlider}
                />
              </div>
              <div className="hidden lg:block">
                <p className="text-white font-semibold text-lg">My Cart:</p>
                <p className="text-yellow-500 font-semibold"> {carts?.length} - ${totalPrice}</p>
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
              {user && <button onClick={logOut}>Logout</button>}
            </ul>

            <div className="flex items-center gap-3">
              <PhoneIcon className="size-9" />
              <div>
                <h1 className="font-semibold">Customer Support:</h1>
                <p className="text-xs">
                  <span className="hover:underline cursor-pointer">
                    +880 000 000 000
                  </span>{" "}
                  or{" "}
                  <span className="hover:underline cursor-pointer">
                    example@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* nav Slider start */}
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
      {/* nav Slider end */}

      {/* cart slider start */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-white">
            <div className="flex justify-between items-center p-3 lg:p-5 bg-yellow-400">
              <button
                onClick={closeCart}
                className="hover:bg-black/10 hover:shadow-lg rounded-full p-1 transition-all duration-300"
              >
                <XMarkIcon className="size-7" />
              </button>

              <Link to="/my-cart">
                <h1 className="text-xl lg:text-2xl font-bold"> My Cart</h1>
              </Link>
            </div>

            <div>
              {carts?.map((cart) => (
                <div
                  key={cart?._id}
                  className="py-2 px-5 flex gap-3 border-b my-3"
                >
                  <img src={cart?.product_image[0]} alt="" className="size-28" />

                  <div className="space-y-2">
                    <h2 className="text-xl lg:text-2xl font-bold">
                      {cart?.title}
                    </h2>
                    <div className="flex  justify-between items-center ">
                      <p>${cart?.unit_price}</p>
                      <button className="hover:text-red-500 transition-all duration-300  ">
                        <TrashIcon className="size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/my-cart">
              <button className="py-2 w-full my-3 mx-2 bg-yellow-400 rounded-lg shadow-lg lg:text-xl font-semibold hover:bg-yellow-500 hover:shadow-none transition-all duration-300">
                View All Cart
              </button>
            </Link>
          </div>
        </div>
      )}
      {/* cart slider end */}
    </div>
  );
};

export default Navbar;
