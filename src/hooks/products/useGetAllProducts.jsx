import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useGetAllProducts = (page, limit, brand, minPrice, maxPrice, category) => {
    
    const axiosPublic = useAxiosPublic();

    const { data: productsData, isPending, refetch} = useQuery({
        queryKey: ["products"],
        queryFn: async() => {
            const res = await axiosPublic.get(`/products?page=${page}&limit=${limit}||brand=${brand}||minPrice=${minPrice}||maxPrice=${maxPrice}||category=${category}`);
            return res.data
        }
    })

    const products = productsData?.products || [];
    const totalProduct = productsData?.totalProduct;

    return { products , totalProduct, isPending, refetch}
};

export default useGetAllProducts;