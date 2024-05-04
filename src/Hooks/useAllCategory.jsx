import useAxiosPublic from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const useAllCategory = () => {
  const axiosPublic = useAxiosPublic();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category");
      return res.data;
    },
  });

  return categories;
};

export default useAllCategory;
