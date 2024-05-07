import React from 'react';

import { IoIosSearch } from "react-icons/io";


const Dashboard_Navbar = () => {
    return (
        <div className='bg-gray-100 rounded-md hidden lg:block '>
            <div className='flex items-center justify-between py-4 shadow-sm  '>
                <h1 className='md:font-medium lg:text-xl text-md mr-2 text-gray-800 px-2 '> Munshi Wholesale </h1>
                <div className='flex items-center md:gap-4 lg:gap-5 gap-3 '>
                    <div className='relative w-full lg:w-60 '>
                        <input
                            type='text'
                            id='search'
                            className='bg-gray-100 border  border-gray-800  text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2  py-2 text-gray-900  '
                            placeholder='Search...'
                        />
                        <p  className='absolute inset-y-0 end-0 flex items-center pe-3 '>
                            <IoIosSearch size={23} className='min-w-max text-gray-900  ' />
                        </p >
                    </div >
                    <img src="https://i.ibb.co/9HmwSVd/avatar4.jpg" alt="" className="className='  w-10 h-10 border-2  border-white rounded-full dark:border-gray-800'" />

                </div >
            </div>

        </div>
    );
};

export default Dashboard_Navbar;