import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useTotalOrders = () => {
  const axiosPublic = useAxiosPublic();

  const { data: totalOrders = [] } = useQuery({
    queryKey: ["totalOrders"],
    queryFn: async () => {
      const res = await axiosPublic.get("/total-orders");
      return res.data;
    },
  });

  return totalOrders;
};

export default useTotalOrders;
