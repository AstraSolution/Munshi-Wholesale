import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { IconButton } from "@material-tailwind/react";

export default function SearchBar() {
  const axiosPublic = useAxiosPublic();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: searchResults = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["searchResults", searchTerm],
    queryFn: async () => {
      if (searchTerm.trim() === "") return [];
      const res = await axiosPublic.get(`/products/search/${searchTerm}`);
      return res.data;
    },
  });

  console.log("search items:", searchResults);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          name="search"
          placeholder="Search by Product"
          className="px-4 py-3 rounded-lg w-full"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <span className="-ml-10">
          <SearchIcon className="h-6 w-6 text-gray-500" />
        </span>
      </div>

      {/* display search results */}
      <div className="w-full absolute h-[350px] md:h-[400px] overflow-x-auto custom-scrollbar">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="bg-white p-4 border-none">
            <tbody className="shadow-md">
              {searchResults.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      className="w-12 mx-auto"
                      src={product.image[0]}
                      alt=""
                    />
                  </td>
                  <td className="text-sm">
                    <span className="flex md:hidden">
                      {product.title.slice(0, 12)}.....
                    </span>
                    <span className="hidden md:flex">
                      {product.title.slice(0, 20)}.....
                    </span>
                  </td>
                  <td className="hidden lg:flex justify-center">
                    {product.quantity > 1 ? (
                      <span className="text-green-500 ">In Stock</span>
                    ) : (
                      <span></span>
                    )}
                  </td>
                  <td className="text-center">${product.price}</td>
                  <td className="flex justify-center">
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
    </div>
  );
}
