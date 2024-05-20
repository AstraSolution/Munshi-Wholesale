// import AllAnalyticsChart from "./Charts/AllAnalyticsChart";
import BrandChart from "./Charts/BrandChart";
import CategoryChart from "./Charts/CategoryChart";
import DashboardStats from "./DashboardStats";
import TopProducts from "./TopProducts";
const DashboardHome = () => {
    return (
        <div>
            <DashboardStats></DashboardStats>

            <div className="lg:flex justify-evenly lg:ml-5 mt-5 mb-5">
                <div className="w-full lg:w-[60%]  ">
                    <BrandChart></BrandChart>
                </div>
                <div className=" lg:w-[37%] md:w-[50%] lg:ml-0 md:ml-52">
                    <CategoryChart></CategoryChart>
                </div>
            </div>
            {/* <AllAnalyticsChart></AllAnalyticsChart> */}
            <TopProducts></TopProducts>
        </div>
    );
};

export default DashboardHome;