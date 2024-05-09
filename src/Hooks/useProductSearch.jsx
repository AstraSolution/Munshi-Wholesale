import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProductSearch = () => {
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

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    isLoading,
    handleInputChange,
    refetch,
  };
};

export default useProductSearch;
