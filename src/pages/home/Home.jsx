import Cards from "../../components/Cards/Card";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import Banner from "../../components/Home/Banner";

const Home = () => {
  return (
    <div className=" mx-auto">
      <Banner></Banner>
      <FeaturedCard></FeaturedCard>
      <Cards></Cards>
    </div>
  );
};

export default Home;
