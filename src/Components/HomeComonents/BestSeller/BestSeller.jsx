import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [] ,isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featured-products");
      return res.data;
    },

  });

if (isLoading) {
  return (
    <div>
      loading 
    </div>
  )
}

  return (
    <div className="mt-20">
      <div className="relative">
        <h2 className="text-4xl font-bold montserrat text-center">
          Pick Our Best One
        </h2>

        <Link to="/shop" className="absolute right-0 top-0 hidden lg:block">
          <button className="bg-yellow-400 py-2 px-4 rounded-lg font-medium">
            Show All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 my-10">
        {/* Product-Cards */}
        {products?.products?.slice(0, 8)?.map((product) => (
          <ProductCard
            key={product?._id}
            currentProduct={product}
          ></ProductCard>
        ))}
      </div>
      <Link to="/shop" className="block lg:hidden">
        <button className="bg-yellow-400 py-2 px-4 rounded-lg font-medium mx-auto mt-5 flex justify-center">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default BestSeller;
