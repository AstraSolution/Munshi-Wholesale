import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-black"
              : "hover:border-b-2 border-black"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-black"
              : "hover:border-b-2 border-black"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-black"
              : "hover:border-b-2 border-black"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/sign-up"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b border-black"
              : "hover:border-b border-black"
          }
        >
          SignUp
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto py-5">
          <div className="flex justify-between items-center">
            <div className="text-4xl text-white">
              <Logo />
            </div>

            <form className="">
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
              <ShoppingBagIcon className="size-12 text-white" />
              <div>
                <p className="text-white font-semibold text-lg">My Cart:</p>
                <p className="text-yellow-500 font-semibold">0 - $0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <ul className="flex justify-around items-center gap-10 text-xl font-semibold">
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="size-9" />
            <div>
              <h1>Customer Support:</h1>
              <p>+880 000 000 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
