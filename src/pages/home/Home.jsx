import Banner from "../../components/Home/Banner";
import FeatureProduct from "../../components/FeaturedCard/FeaturedCard";
import Newslatter from "../../components/Newslatter/Newslatter";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <FeatureProduct></FeatureProduct>
      <Newslatter />
    </div>
  );
};

export default Home;
