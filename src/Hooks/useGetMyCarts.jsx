import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetMyCarts = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: cartsData = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["myCarts"],
    queryFn: async () => {
      const email = localStorage.getItem("email");
      const res = await axiosPublic.get(`/myCarts/${email}`);
      // console.log("cart data", res.data);
      return res?.data;
    },
  });

  const myCarts = cartsData?.carts;
  const price = cartsData?.totalPrice;
  const quantity = cartsData?.quantity;

  // return { myCarts, price, quantity, isPending, refetch };
  return [myCarts, price, quantity, isPending, refetch];
};

export default useGetMyCarts;
