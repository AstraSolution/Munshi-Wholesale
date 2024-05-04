import useAxiosPublic from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const useAllBrand = () => {
  const axiosPublic = useAxiosPublic();

  const { data: brands = [] } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await axiosPublic.get("/brands");
      return res.data;
    },
  });

  return brands;
};

export default useAllBrand;
