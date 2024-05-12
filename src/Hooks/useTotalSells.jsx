import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useTotalSells = () => {
    const axiosPublic = useAxiosPublic();

    const { data: totalSallesProducts = [] } = useQuery({
        queryKey: ["totalSallesProducts"],
        queryFn: async () => {
            const res = await axiosPublic.get("/total-sales");
            return res.data;
        },
    });



    return totalSallesProducts;
};

export default useTotalSells;
