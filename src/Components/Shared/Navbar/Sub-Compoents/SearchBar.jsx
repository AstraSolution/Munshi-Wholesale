
import { useEffect, useRef, useState } from "react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { IconButton } from "@material-tailwind/react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import useProductSearch from "../../../../Hooks/useProductSearch";

const SearchBar = () => {
  const { searchTerm, searchResults, isLoading, handleInputChange, refetch } = useProductSearch();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams(); // Get the product ID from URL params

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close dropdown when location changes
  }, [location]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProductClick = (productId) => {
    setIsOpen(false);
    navigate(`/products/${productId}`);
  };

  return (
    <div className="relative">
      <div className="flex items-center" onClick={toggleDropdown}>
        <input
          type="text"
          name="search"
          placeholder="Search by Product"
          className="px-4 py-2 md:py-3 rounded-lg w-full border-2 border-yellow-500"
          value={searchTerm}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <span className="-ml-10">
          <SearchIcon className="h-6 w-6 text-gray-500" />
        </span>
      </div>

      {/* display search results */}
      {isOpen && (
        <div className="w-full absolute h-[350px] md:h-[400px] overflow-x-auto custom-scrollbar" ref={dropdownRef}>
          {isLoading ? (
            <div className="absolute w-full p-4 bg-white rounded-lg">
              <p>Loading...</p>
            </div>
          ) : (
            <table className="bg-white p-4 border-none">
              <tbody className="shadow-md rounded-lg border-t-4 border-gray-300">
                {searchResults?.map((product) => (
                  <tr key={product?._id} onClick={() => handleProductClick(product?._id)} style={{ cursor: "pointer" }}>
                    <td className="border-none">
                      <img className="w-12 mx-auto" src={product?.image[0]} alt="" />
                    </td>
                    <td className="text-sm border-none">
                      <span className="flex md:hidden">{product?.title.slice(0, 12)}.....</span>
                      <span className="hidden md:flex">{product?.title.slice(0, 20)}.....</span>
                    </td>
                    <td className="hidden lg:flex justify-center border-none">
                      {product?.quantity > 1 ? (
                        <span className="text-green-500 ">In Stock</span>
                      ) : (
                        <span></span>
                      )}
                    </td>
                    <td className="text-center border-none">${product?.price}</td>
                    <td className="flex justify-center border-none">
                      <button>
                        <IconButton color="green">
                          <ShoppingCartIcon className="h-5 w-5 text-white" />
                        </IconButton>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Display product details based on the current product ID */}
      {productId && (
        <div>
        
          {/* Example: <ProductDetails productId={productId} /> */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
