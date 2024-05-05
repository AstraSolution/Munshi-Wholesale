import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function MainLayout() {
  return (
    <div >
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
