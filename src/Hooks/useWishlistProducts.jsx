import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useWishlistProducts = () => {

  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: wishlistProduct = [], isLoading, refetch } = useQuery({
    queryKey: ["wishlistProduct", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishlist/${user?.email}`)
      return res.data
    }
  })

  return [wishlistProduct, isLoading, refetch];
};

export default useWishlistProducts;