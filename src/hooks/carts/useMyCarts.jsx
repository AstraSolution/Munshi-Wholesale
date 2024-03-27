import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useMyCarts = () => {
  const axiosPublic = useAxiosPublic();
  let carts = [];
  let totalPrice = 0;

  const email = localStorage.getItem("email");
  console.log("email: ", email);
  if (email === undefined || email === "undefined") {
    console.log("localCarts");
    const localCarts = localStorage.getItem("carts");
    if (localCarts) {
      carts.push(...JSON.parse(localCarts));
    }
  }

  const {
    data = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["myCarts"],
    queryFn: async () => {
      if (email === undefined || email === "undefined") return [];
      const res = await axiosPublic.get(`/myCarts/${email}`);
      return res.data;
    },
  });

  if (data?.length > 0) {
    carts.push(...data);
  }
  // Calculate total price
  totalPrice = carts.reduce((acc, cartItem) => {
    return acc + cartItem.total_price;
  }, 0);

  console.log(carts);
  return { carts, totalPrice, isPending, refetch };
};

export default useMyCarts;
