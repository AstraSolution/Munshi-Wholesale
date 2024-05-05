// import { Link } from "react-router-dom";
// import { FaRegHeart } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <div className="bg-gray-800 text-white">
//       <ul className=" flex justify-center flex-wrap gap-5 py-4">
//         <li>
//           <Link to={"/"}>Home</Link>
//         </li>
//         <li>
//           <Link to={"/shop"}>Shop</Link>
//         </li>
//         <li>
//           <Link to={"/login"}>Login</Link>
//         </li>
//         <li>
//           <Link to={"/register"}>Register</Link>
//         </li>
//         <li>
//           <Link to={"/aboutUs"}>AboutUs</Link>
//         </li>
//         <li>
//           <Link to={"/faq"}>FAQ</Link>
//         </li>
//         <li>
//           <Link to={"/cart"}>Cart</Link>
//         </li>

//         <li>
//           <Link to={"/dashboard"}>Dashboard</Link>
//         </li>
//         <li>
//           <Link to={"/wishlist"}>
//             <div className="flex  items-center ">
//               <div className="relative ">
//                 <div className="  absolute left-4 -top-2 ">
//                   <p className="flex h-2 w-2 items-center justify-center bg-[#FFA500] p-3 rounded-full  text-sm text-white">
//                     73
//                   </p>
//                 </div>
//                 <FaRegHeart className="text-2xl " />
//               </div>
//             </div>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <div>
//       <div className="py-4 shadow-sm bg-white ">
//         <div className="container mx-auto flex items-center justify-between">
//           {/* logo  */}
//           <Link to={"/"}>MunshiWholesale</Link>

//           {/* search bar  */}
//           <div className="w-full max-w-xl relative flex items-center">
//             <input className="px-6 py-2 border rounded-full border-yellow-400 focus:border-yellow-400 focus:border-2"  placeholder="Search by Product" type="text" name="" id="" />
//             <span className="bg-yellow-400 px-4 py-3 -ml-10 rounded-tr-[25px] rounded-br-[25px] ">
//               <FaSearch />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  HeartIcon,
} from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <div className="container mx-auto py-4 bg-gray-200 flex justify-between items-center flex-wrap">
      {/* logo  */}
      <h3 className="order-1">
        <Link to={"/"}>MinshiWholesale</Link>
      </h3>

      {/* search bar  */}
      <div className="order-3 md:order-2 flex items-center mx-auto mt-4">
        <input
          type="text"
          name="search"
          placeholder="Search by Product"
          className="px-4 py-2 rounded-lg"
        />
        <span className="-ml-8">
          <SearchIcon className="h-6 w-6 text-gray-500" />
        </span>
      </div>

      {/* cart wishlist profile icons  */}
      <div className="order-2 md:order-3">
        <div className="flex items-center gap-5">
          <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
          <HeartIcon className="h-6 w-6 text-gray-500" />
          <UserCircleIcon className="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
