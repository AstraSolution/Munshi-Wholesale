import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCurrentUser = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: currentUser = [], isPending , isLoading , refetch  } = useQuery({
        queryKey: ["currentUser", user?.email],
        queryFn: async () => {
           
            const res = await axiosPublic.get(`/users/${user?.email}`)
            console.log( "user" , res.data);
            return res.data
        }
    })

    return { currentUser, isLoading , isPending , refetch};
};

export default useCurrentUser;
