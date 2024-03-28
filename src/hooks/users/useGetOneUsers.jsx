import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";

const useGetOneUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: currentUser = [], isPending: isLoading } = useQuery({
    queryKey: ["currentUser", user?.email],
    queryFn: async () => {
      const email = localStorage.getItem("email");
      const res = await axiosPublic.get(`/users/${email}`);
      return res.data;
    },
  });
  return {currentUser, isLoading}
};

export default useGetOneUsers;
