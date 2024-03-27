import React, { useState } from "react";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const axiosPublic = useAxiosPublic();

  // fetch data
  const { data: searchQuery = [], refetch: setSearchQuery } = useQuery({
    queryKey: ["searchs", query],
    queryFn: async () => {
      if (!query) return [];
      try {
        const res = await axiosPublic.get(`/products/title/${query}`);
        return res.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    },
    enabled: false,
  });

  // handle search as the user types
  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setQuery(inputValue);
    setSearchQuery(inputValue);
  };

  console.log(searchQuery);

  return (
    <div className="relative">
      <div className="hidden lg:flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 w-96 rounded-l-lg text-lg focus:outline-none"
          value={query}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-yellow-400 py-2 px-3 rounded-r-lg text-lg font-semibold"
        >
          Search
        </button>
      </div>

      {/* display search result items */}
      {searchQuery.length > 0 && (
        <table className="bg-white p-4 rounded-lg absolute w-full">
          {query.trim() !== "" &&
            searchQuery.map((item) => (
              <tr className="" key={item.id}>
                <td className="p-2">
                  <img className="w-8" src={item.image[0]} alt="" />
                </td>
                <td className="p-2">
                  <h3 className="font-semibold">{item.title}</h3>
                </td>
                <td className="p-2">
                  <p>${item.price}</p>
                </td>
              </tr>
            ))}
        </table>
      )}
    </div>
  );
}
