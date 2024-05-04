import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllBrand = () => {
  const axiosPublic = useAxiosPublic();

  const { data: brands = [], isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await axiosPublic.get("/brands");
      return res.data;
    },
  });

  return { brands, brandsLoading: isLoading };
};

export default useAllBrand;
