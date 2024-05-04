import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useAllCategory = () => {
  const axiosPublic = useAxios();

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category");
      return res.data;
    },
  });

  return { categories, categoryLoading: isLoading };
};

export default useAllCategory;
