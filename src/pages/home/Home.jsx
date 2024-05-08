import Category from "../../Components/HomeComonents/Category/Category";
import Category2 from "../../Components/HomeComonents/Category/Category2";
import Hero from "../../Components/HomeComonents/Hero/Hero";
import Offer from "../../Components/HomeComonents/Offer/Offer";
import Services from "../../Components/HomeComonents/Services/Services";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Category />
      <Category2 />
      <Offer />
    </div>
  );
}

export default Home;
