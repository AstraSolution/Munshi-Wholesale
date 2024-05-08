import { useNavigate } from "react-router-dom";
import useAllProduct from "../../../Hooks/useAllProduct";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const BestSeller = () => {
  const products = useAllProduct();
  const navigate = useNavigate();

  const showAll = () => {
    navigate("/shop", { replace: true });
    window.scrollTo(0, 0);
  };

  return (
    <div className="px-10 my-20">
      <h2 className="text-4xl font-bold montserrat text-center">
        Pick Our Best One
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 my-10">
        {/* Product-Cards */}
        {products.slice(0, 8)?.map((product) => (
          <ProductCard
            key={product?._id}
            currentProduct={product}
          ></ProductCard>
        ))}
      </div>
      <button
        onClick={showAll}
        className="bg-yellow-400 py-2 px-4 rounded-lg font-medium mx-auto mt-5 flex justify-center"
      >
        Show All
      </button>
    </div>
  );
};

export default BestSeller;
