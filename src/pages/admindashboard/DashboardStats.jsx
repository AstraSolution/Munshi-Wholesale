import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
import useAllProduct from "../../Hooks/useAllProduct";
import useAllUsers from "../../Hooks/useAllUsers";
import useTotalOrders from "../../Hooks/useTotalOrders";
import useTotalSells from "../../Hooks/useTotalSells";

const DashboardStats = () => {
  const { totalUser } = useAllUsers();
  const { totalProduct } = useAllProduct(1, 9, { category: [], brand: [] });
  const totalProducts = useTotalOrders();
  const totalProductsSold = useTotalSells();

  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link to={"/wishlist"}>
          <div className="bg-white  shadow-lg rounded-md flex items-center justify-between py-6 px-3 text-gray-800 font-medium group">
            <div className="flex justify-center items-center w-14 h-14  bg-[#FF9D00] rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <MdOutlineProductionQuantityLimits
                size={30}
                className="stroke-current text-white transform transition-transform duration-500 ease-in-out"
              ></MdOutlineProductionQuantityLimits>
            </div>
            <div className="text-right">
              <p className="text-2xl">
                {" "}
                {totalProductsSold?.totalProductsSold}{" "}
              </p>
              <p>Total Sell Product</p>
            </div>
          </div>
        </Link>

        <div className="bg-white  shadow-lg rounded-md flex items-center justify-between  py-6 px-3  text-gray-800 font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-[#FF9D00]  rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="stroke-current  text-white transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl"> {totalProducts?.totalProductsOrders} </p>
            <p> Total Order </p>
          </div>
        </div>

        <div className="bg-white  shadow-lg rounded-md flex items-center justify-between  py-6 px-3   text-gray-800 font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-[#FF9D00] rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="stroke-current text-white transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">{totalUser} </p>
            <p>Total Users </p>
          </div>
        </div>
        <div className="bg-white  shadow-lg rounded-md flex items-center justify-between  py-6 px-3  text-gray-800 font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-[#FF9D00] rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="stroke-current text-white transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl"> {totalProduct} </p>
            <p>Total Products </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
