import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
// import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
// import { HiOutlineDatabase } from "react-icons/hi";
// import { TbReportAnalytics } from "react-icons/tb";
// import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { NavLink, useLocation,} from "react-router-dom";

const Dashboard = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  let isSmallDevice = useMediaQuery({ query: "(max-width: 640px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };

 

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 lg:max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
          } `}
      ></div>

      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-gray-800 text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden lg:relative fixed
         h-screen "
      >
        <div className="flex items-center justify-between gap-2.5 font-medium border-b py-3 border-slate-300 mx-3">

          <span className="text-xl whitespace-pre">Munshi Wholesale </span>
          {/* Toggle icon for medium and small devices */}
          {(isTabletMid || isSmallDevice) && (
            <motion.div
              onClick={() => {
                setOpen(!open);
              }}
              animate={
                open
                  ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }
                  : {
                    x: -10,
                    y: -200,
                    rotate: 180,
                  }
              }
              transition={{ duration: 0 }}
              className="cursor-pointer"
            >
              <IoIosArrowBack size={25} />
            </motion.div>
          )}
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">

            <li>
              <NavLink to={"/dashboard"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium "
                    : "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium"
              }>
                <BsPerson size={23} className="min-w-max" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/profile"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium "
                    : "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium"
              }>
                <BsPerson size={23} className="min-w-max" />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/allOrders"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium "
                    : "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium"
              }>
                <BsPerson size={23} className="min-w-max" />
                All Orders
              </NavLink>
            </li>

            <li>
              <NavLink to={"/dashboard/my_order"} className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium bg-gray-600 text-[#FFA500] "
                    : "p-2.5 flex rounded-md gap-2 items-center md:cursor-pointer cursor-default duration-300 font-medium"
              }>
                <AiOutlineAppstore size={23} className="min-w-max" />
                My Order
              </NavLink>
            </li>
          
          </ul>


          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Sidebar toggle for small devices */}
      <div className="flex justify-between items-center py-1 gap-6 px-1 md:py-2 md:px-3">
        <div className="p-1 text-white lg:hidden" onClick={() => setOpen(true)}>
          <MdMenu size={25} />
        </div>
        <div className='relative w-full md:w-80 lg:hidden'>
          <input
            type='text'
            id='search'
            className='bg-gray-600 border border-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white'
            placeholder='Search...'
          />
          <button type='button' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <IoIosSearch size={23} className='min-w-max' />
          </button>
        </div>
        <img src="https://i.ibb.co/9HmwSVd/avatar4.jpg" alt="" className="className=' lg:hidden  w-10 h-10 border-2  border-white rounded-full dark:border-gray-800'" />
      </div>
    </div>
  );
};

export default Dashboard;
