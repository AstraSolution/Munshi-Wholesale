import Banner from "../../components/Home/Banner";
import FeatureProduct from "./FeatureProduct";

import Newslatter from "../../components/Newslatter/Newslatter";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>

      <FeatureProduct></FeatureProduct>
      <FeaturedCard></FeaturedCard>
      <Cards></Cards>
      <Newslatter/>
    </div>
  );
};

export default Home;
