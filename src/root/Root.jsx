import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar />
        <Outlet />
      <Footer/>
 
    </div>
  );
};

export default Root;
