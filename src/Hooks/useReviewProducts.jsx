
import useAxiosPublic from './useAxiosPublic';

import { useQuery } from '@tanstack/react-query';
import useCurrentUser from './useCurrentUser';

const useReviewProducts = () => {

  const axiosPublic = useAxiosPublic();
  const {currentUser} = useCurrentUser()

  const { data: reviewProduct = {} ,refetch: reviewRefetch} = useQuery({
    queryKey: ["reviewProduct"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/user/${currentUser?.email}`)
      console.log(res.data);
      return res.data
    }
})
  console.log(reviewProduct);

  return [reviewProduct,reviewRefetch];
};

export default useReviewProducts;