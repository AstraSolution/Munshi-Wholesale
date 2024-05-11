import AllAnalyticsChart from "./Charts/AllAnalyticsChart";
import BrandChart from "./Charts/BrandChart";
import CategoryChart from "./Charts/CategoryChart";
import DashboardStats from "./DashboardStats";
import TopProducts from "./TopProducts";
const DashboardHome = () => {
    return (
        <div>
            <DashboardStats></DashboardStats>

            <div className="lg:flex justify-evenly">
                <div className="lg:w-[60%] ">
                    <BrandChart></BrandChart>
                </div>
                <div className="w-full lg:w-[33%]">
                    <CategoryChart></CategoryChart>
                </div>
            </div>
            <AllAnalyticsChart></AllAnalyticsChart>
            <TopProducts></TopProducts>
        </div>
    );
};

export default DashboardHome;