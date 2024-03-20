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

// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       Sidebar
//       <div
//         className={`bg-gray-800 text-white w-64 flex flex-col ${
//           sidebarOpen ? "block" : "hidden"
//         }`}
//       >
//         <div className="h-16 flex items-center justify-center">Logo</div>
//         <nav className="flex-1">
//           <ul>
//             <li className="py-4 px-6 text-sm hover:bg-gray-700">
//               <NavLink to="/dashboard">Profile</NavLink>
//             </li>
//             <li className="py-4 px-6 text-sm hover:bg-gray-700">
//               <NavLink to="/dashboard/add-product">AddProduct</NavLink>
//             </li>
//             <li className="py-4 px-6 text-sm hover:bg-gray-700">
//               <a href="#" className="block">
//                 Reports
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       Main content
//       <div className="flex-1 bg-gray-200">
//         Top navigation bar
//         <div className="bg-white h-16 flex items-center justify-between shadow">
//           <button
//             className="px-4 py-2 text-sm bg-gray-600 text-white hover:bg-gray-700 focus:outline-none"
//             onClick={toggleSidebar}
//           >
//             {sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
//           </button>
//           <div className="px-6">Dashboard</div>
//           User Profile dropdown
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="px-6 flex items-center text-sm focus:outline-none"
//             >
//               <span>mr. jon</span>
//             </button>
//             Dropdown menu
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
//                 <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         Main content area
//         <div className="p-6">{} </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
