import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useTopProducts = () => {
    const axiosPublic = useAxiosPublic();

    const { data: topProducts = [] } = useQuery({
        queryKey: ["topProducts"],
        queryFn: async () => {
            const res = await axiosPublic.get("/topPopularProducts");
            return res.data;
        },
    });
    console.log(topProducts?.popularProducts);



    return topProducts;
};

export default useTopProducts;