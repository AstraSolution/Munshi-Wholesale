import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Dashboard = () => {
  const [isSliderOpen, setIsSidebarOpen] = useState(true);

  const toggleSlider = () => {
    setIsSidebarOpen(!isSliderOpen);
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
      <div className="w-full h-14 bg-black">
        <div className="flex justify-between items-center py-2 px-5">
          <button onClick={toggleSlider}>
            {isSliderOpen ? (
              <ChevronLeftIcon className="size-8 bg-yellow-400 p-1 rounded-full" />
            ) : (
              <ChevronRightIcon className="size-8 bg-yellow-400 p-1 rounded-full" />
            )}
          </button>
          <img
            src="https://i.ibb.co/9qmtc5b/person-1.jpg"
            className="size-10 object-cover rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
