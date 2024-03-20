import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Dashboard = () => {
  const [isSliderOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSlider = () => {
    setIsSidebarOpen(!isSliderOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex">
      {/* slider */}
      <div
        className={`w-64 h-screen bg-black text-white ${
          isSliderOpen ? "block" : "hidden"
        }`}
      ></div>

      {/* navbar */}
      <div className="w-full h-14 bg-black shadow-lg">
        <div className="flex justify-between items-center py-2 px-5">
          <button onClick={toggleSlider}>
            {isSliderOpen ? (
              <ChevronLeftIcon className="size-8 bg-yellow-400 p-1 rounded-full" />
            ) : (
              <ChevronRightIcon className="size-8 bg-yellow-400 p-1 rounded-full" />
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
              <div className="absolute right-0 flex flex-col items-center gap-2 bg-yellow-500 w-44 p-3 rounded-md mt-1 text-white">
                <h1 className="text-lg font-semibold">Resel Mia</h1>
                <button className="bg-black py-1 px-2 font-semibold rounded-md shadow-md hover:shadow">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
