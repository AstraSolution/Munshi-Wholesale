import BrandChart from "./Charts/BrandChart";
import CategoryChart from "./Charts/CategoryChart";
import DashboardStats from "./DashboardStats";
import TopProducts from "./TopProducts";



const DashboardHome = () => {
    return (
        <div>
         <DashboardStats></DashboardStats>  
       
        <BrandChart></BrandChart>
         <CategoryChart></CategoryChart>
       <TopProducts></TopProducts>
        </div>
    );
};

export default DashboardHome;