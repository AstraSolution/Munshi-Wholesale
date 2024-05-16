import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import useAllProduct from "../../Hooks/useAllProduct";

const Shop = ({ categoryFilter, brandFilter }) => {
  const searchItems = {
    category: categoryFilter,
    brand: brandFilter,
  };

  const { products } = useAllProduct(1, 12, searchItems);

  console.log(products);

  return (
    <div className="w-2/3 md:w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 my-10">
        {/* Product-Cards */}
        {products?.map((product) => (
          <ProductCard
            key={product?._id}
            currentProduct={product}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
