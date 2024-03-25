import React from 'react';
import useAxiosPublic from '../axios/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGetAllUsers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: users = [] ,refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosPublic.get("/users")
            return res.data
        }
    })
    return [users,refetch]
};

export default useGetAllUsers;