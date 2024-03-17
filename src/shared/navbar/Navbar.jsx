import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-end gap-8">
          <div>
            <h1 className="font-bold text-4xl">
              Munshi<span className="font-extralight">Wholesale</span>
            </h1>
          </div>
          <div>
            <ul className="flex justify-around items-center gap-3 text-xl">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <MagnifyingGlassIcon className="size-7" />
          <div className="relative">
            <ShoppingBagIcon className="size-7" />
            <div className="size-2 bg-red-500 rounded-full absolute bottom-0 right-0"></div>
          </div>
          <div className="relative">
            <HeartIcon className="size-7" />
            <div className="size-2 bg-red-500 rounded-full absolute bottom-0 right-0"></div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/9qmtc5b/person-1.jpg"
              alt="user"
              className="size-9 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
