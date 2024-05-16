import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllProduct = () => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [] ,  isLoading, refetch: productRefetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });



  return [products , isLoading ,productRefetch] ;
};

export default useAllProduct;
