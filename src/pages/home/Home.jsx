import Cards from "../../components/Cards/Card";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import Banner from "../../components/Home/Banner";
import Newslatter from "../../components/Newslatter/Newslatter";

const Home = () => {
  return (
    <div className=" mx-auto">
      <Banner></Banner>
      <FeaturedCard></FeaturedCard>
      <Cards></Cards>
      <Newslatter/>
    </div>
  );
};

export default Home;
