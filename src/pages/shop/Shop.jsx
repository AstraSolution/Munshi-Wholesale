import { useEffect, useState } from "react";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import useAllProduct from "../../Hooks/useAllProduct";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Shop = ({ categoryFilter, brandFilter }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const searchItems = {
    category: categoryFilter,
    brand: brandFilter,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const { products, totalProduct } = useAllProduct(
    currentPage,
    12,
    searchItems
  );

  const pageNumber = Array.from(
    { length: Math.ceil(totalProduct / 9) },
    (_, index) => index + 1
  );

  const handlePagination = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handlePrevPage = (page) => {
    if (currentPage > 1) {
      setCurrentPage(page - 1);
    }
  };

  const handleNextPage = (page) => {
    if (currentPage < Math.ceil(totalProduct / 9)) {
      setCurrentPage(page + 1);
    }
  };

  return (
    <div className="w-full px-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-[3%] my-14">
        {/* Product-Cards */}
        {products?.map((product) => (
          <ProductCard
            key={product?._id}
            currentProduct={product}
          ></ProductCard>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-20 mb-10 pt-20 pb-10 md:pr-36">
        <button
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 cursor-pointer hover:bg-gray-300 ${
            currentPage > 1 && "text-gray-900"
          }`}
          onClick={() => handlePrevPage(currentPage)}
        >
          <FaArrowLeftLong />
          Previous
        </button>
        <div className="flex items-center gap-2">
          {pageNumber?.map((page) => (
            <button
              key={page}
              className={`mx-1 px-3 py-1 rounded-lg bg-gray-300 text-black hover:bg-gray-900 hover:text-white ${
                currentPage === page && "bg-gray-900 text-white"
              }`}
              onClick={() => handlePagination(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-300 ${
            currentPage === pageNumber?.length
              ? "text-gray-400"
              : "text-gray-900"
          }`}
          onClick={() => handleNextPage(currentPage)}
        >
          Next
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Shop;
