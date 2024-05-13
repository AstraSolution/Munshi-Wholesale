import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllOrders = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allOrdersData, isPending, refetch: refetchOrder } = useQuery({
        queryKey: ["allOrders"],
        queryFn: async () =>{
            const res  = await axiosSecure.get(`/all-orders`);
            return res.data
        }
    })

    const orders = allOrdersData?.allOrders;

    console.log("orders: ", orders );
    return {orders, isPending, refetchOrder}
};

export default useGetAllOrders;