import Header from "../components/header/Header";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
