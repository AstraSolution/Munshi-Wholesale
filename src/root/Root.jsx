import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Root;
