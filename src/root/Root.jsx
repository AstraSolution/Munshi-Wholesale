import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Navbar from "../shared/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
    </div>
  );
};

export default Root;
