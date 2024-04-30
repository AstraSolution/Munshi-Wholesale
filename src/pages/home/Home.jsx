import Offer from "../../Components/HomeComonents/Offer/Offer";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import SectionBanner from "../../Components/Shared/SectionBanner/SectionBanner";

function Home() {
  return (
    <div className="my-16 px-10">
      <Offer></Offer>

      {/* Product Card Design */}
      <h2 className="text-center text-4xl font-bold mt-16">Product Card</h2>
      <div className="grid grid-cols-4 gap-5 my-10">
        {/* Product-Cards */}
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>

      <SectionBanner></SectionBanner>
    </div>
  );
}

export default Home;
