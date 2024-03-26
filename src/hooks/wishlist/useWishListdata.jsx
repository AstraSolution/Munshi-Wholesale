

import useAxiosPublic from '../axios/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const useWishListdata = () => {

    const email = localStorage.getItem("email")

    const axiosPublic = useAxiosPublic();
    const { data: wishlistProduct = [] , refetch : WishlistReFetech} = useQuery({
        queryKey: ["wishlistProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/wishlist/${email}`)
            return res.data
        }
    })
    return [wishlistProduct,WishlistReFetech]
};

export default useWishListdata;