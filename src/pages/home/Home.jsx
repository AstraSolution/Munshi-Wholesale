import BestSeller from "../../Components/HomeComonents/BestSeller/BestSeller";
import Category from "../../Components/HomeComonents/Category/Category";
import Category2 from "../../Components/HomeComonents/Category/Category2";
import Featured from "../../Components/HomeComonents/Featured/Featured";
import Hero from "../../Components/HomeComonents/Hero/Hero";
import Offer from "../../Components/HomeComonents/Offer/Offer";

function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Category2 />
      <Offer />
      <BestSeller></BestSeller>
      <Featured></Featured>
    </div>
  );
}

export default Home;
