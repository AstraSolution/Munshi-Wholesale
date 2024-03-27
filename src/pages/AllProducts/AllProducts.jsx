import Card from "../../components/Cards/Card";
import useGetAllProducts from "../../hooks/products/useGetAllProducts";
import { useState } from "react";

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { products, totalProduct,  isPending } = useGetAllProducts(currentPage, 12)

  

  if(isPending){
    return <div className=" text-center">Loading...</div>
  }

  const pageNumbers = Array.from(
    { length: Math.ceil(totalProduct / 12) },
    (_, index) => index + 1
  );

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalProduct / 12)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product?._id} product={product}></Card>
        ))}
      </div>
      {pageNumbers?.length > 1 && (
          <div className="flex justify-center my-3 mb-3">
            <button
              onClick={handlePrevPage}
              className="mx-1 px-3 py-1 rounded-lg  bg-yellow-300 text-white hover:bg-yellow-500"
            >
              Prev
            </button>
            {pageNumbers.map((_, index) => (
              <button
                key={index}
                onClick={() => handlePagination(index + 1)}
                className={`mx-1 px-3 py-1 rounded-lg  bg-yellow-300 text-white hover:bg-yellow-500 ${currentPage === index + 1 ? "bg-yellow-500" : ""
                  }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="mx-1 px-3 py-1 rounded-lg  bg-yellow-300 text-white hover:bg-yellow-500"
            >
              Next
            </button>
          </div>
        )}
    </div>
  );
};

export default AllProducts;
