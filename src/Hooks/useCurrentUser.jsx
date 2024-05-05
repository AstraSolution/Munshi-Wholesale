import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCurrentUser = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();


    const { data: currentUser = [] , isLoading , refetch  } = useQuery({
        queryKey: ["currentUser", user?.email],
        queryFn: async () => {
           
            const res = await axiosPublic.get(`/users/${user?.email}`)
           
            return res.data
        }
    })

    return { currentUser, isLoading , refetch};
};

export default useCurrentUser;
