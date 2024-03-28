

import useAxiosPublic from '../axios/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const useWishList = () => {

    const email = localStorage.getItem("email")

    const axiosPublic = useAxiosPublic();
    const { data: wishlistProduct = [] , isLoading, refetch : WishlistReFetech} = useQuery({
        queryKey: ["wishlistProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/wishlist/${email}`)
            return res.data
        }
    });

    console.log(wishlistProduct);

    return { wishlistProduct, isLoading, WishlistReFetech}
};

export default useWishList;