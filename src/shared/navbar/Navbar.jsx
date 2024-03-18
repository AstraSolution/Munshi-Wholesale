import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Logo from "../logo/Logo";

const Navbar = () => {

  return (
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
  );
};

export default Navbar;

