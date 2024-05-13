import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllProduct = (page, limit, searchItems) => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [] } = useQuery({
    queryKey: ["products", page, limit, searchItems],
    queryFn: async () => {
      const url = `/products?page=${page}&limit=${limit}&searchItems=${JSON.stringify(searchItems)}`;
      const res = await axiosPublic.get(url);
      return res.data;
    },
  });

  console.log(products);

  return products;
};

export default useAllProduct;