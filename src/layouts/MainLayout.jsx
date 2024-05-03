import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import Hero from "../Components/HomeComonents/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "../Components/HomeComonents/Category/Category";
import Category2 from "../Components/HomeComonents/Category/Category2";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Outlet />
      <Footer />
    </div>
  );
}
