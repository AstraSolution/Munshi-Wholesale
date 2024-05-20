
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useGetMyCarts = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    data: cartsData = [], isPending, refetch: refetchMyCarts} = useQuery({
      queryKey: ["myCarts"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/myCarts/${user?.email}`);
        return res?.data;
      },
    });

  const myCarts = cartsData?.carts;
  const price = cartsData?.totalPrice;
  const quantity = cartsData?.quantity;

  return {myCarts, price, quantity, isPending, refetchMyCarts};
};

export default useGetMyCarts;



