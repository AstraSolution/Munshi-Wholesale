import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { motion } from 'framer-motion';

const Wish_List = () => {
    return (
        <>


            <motion.div className='container mx-auto py-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  lg:gap-6 gap-4 text-white'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>

                {/* card 1 */}
                <motion.div
                    className="flex flex-col rounded-lg bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  md:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.50}}
                    >
                    <img
                        className="h-44 w-full rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none "
                        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                        alt="" />
                    <motion.div className="flex flex-col justify-start p-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <motion.h5
                            className="mb-2 text-xl font-medium text-white dark:text-neutral-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}>
                            Card title
                        </motion.h5>
                        <motion.p
                            className="mb-4 text-base text-white dark:text-neutral-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </motion.p>
                        <motion.h3
                            className="mb-2 text-xl font-medium text-white dark:text-neutral-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}> Price : $ 120 </motion.h3>
                        <div className='flex items-center gap-2'>
                            <motion.button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}> <FaCartPlus size={23}></FaCartPlus> </motion.button>
                            <motion.button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}> <MdDelete className='text-red-500 ' size={28}></MdDelete> </motion.button>
                        </div>
                        <p className="text-xs text-white dark:text-neutral-300">
                            Last updated 3 mins ago
                        </p>
                        <p className="text-sm text-white dark:text-neutral-300 text-right ">
                            Date : 10 June 2024
                        </p>
                    </motion.div>
                </motion.div>

                
                {/* card 2 */}
                <motion.div
                    className="flex flex-col rounded-lg bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  md:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <img
                        className="h-44 w-full rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none "
                        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                        alt="" />
                    <motion.div className="flex flex-col justify-start p-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <motion.h5
                            className="mb-2 text-xl font-medium text-white dark:text-neutral-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}>
                            Card title
                        </motion.h5>
                        <motion.p
                            className="mb-4 text-base text-white dark:text-neutral-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </motion.p>
                        <motion.h3
                            className="mb-2 text-xl font-medium text-white dark:text-neutral-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}> Price : $ 120 </motion.h3>
                        <div className='flex items-center gap-2'>
                            <motion.button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}> <FaCartPlus size={23}></FaCartPlus> </motion.button>
                            <motion.button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}> <MdDelete className='text-red-500 ' size={28}></MdDelete> </motion.button>
                        </div>
                        <p className="text-xs text-white dark:text-neutral-300">
                            Last updated 3 mins ago
                        </p>
                        <p className="text-sm text-white dark:text-neutral-300 text-right ">
                            Date : 10 June 2024
                        </p>
                    </motion.div>
                </motion.div>











                {/* card 2  */}
                <motion.div
                    className="flex flex-col rounded-lg bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  md:flex-row"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <img
                        className=" h-44 w-full rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none "
                        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                        alt="" />
                    <div className="flex flex-col justify-start p-6">
                        <h5
                            className="mb-2 text-xl font-medium text-white dark:text-neutral-50">
                            Card title
                        </h5>
                        <p className="mb-4 text-base text-white dark:text-neutral-200">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </p>
                        <h3 className="mb-2 text-xl font-medium text-white dark:text-neutral-50"> Price : $ 120 </h3>
                        <div className='flex items-center gap-2'>
                            <button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md"> <FaCartPlus size={23}></FaCartPlus> </button>
                            <button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md">
                                <MdDelete className='text-red-500 ' size={28}></MdDelete>
                            </button>
                        </div>
                        <p className="text-xs text-white dark:text-neutral-300">
                            Last updated 3 mins ago
                        </p>
                        <p className="text-sm text-white dark:text-neutral-300 text-right ">
                            Date : 10 June 2024
                        </p>
                    </div>
                </motion.div>
                {/* card 3 */}
                <motion.div
                    className="flex flex-col rounded-lg bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  md:flex-row"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <img
                        className=" h-44 w-full rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none "
                        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                        alt="" />
                    <div className="flex flex-col justify-start p-6">
                        <h5
                            className="mb-2 text-xl font-medium text-white dark:text-neutral-50">
                            Card title
                        </h5>
                        <p className="mb-4 text-base text-white dark:text-neutral-200">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </p>
                        <h3 className="mb-2 text-xl font-medium text-white dark:text-neutral-50"> Price : $ 120 </h3>
                        <div className='flex items-center gap-2'>
                            <button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md"> <FaCartPlus size={23}></FaCartPlus> </button>
                            <button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md">
                                <MdDelete className='text-red-500 ' size={28}></MdDelete>
                            </button>
                        </div>
                        <p className="text-xs text-white dark:text-neutral-300">
                            Last updated 3 mins ago
                        </p>
                        <p className="text-sm text-white dark:text-neutral-300 text-right ">
                            Date : 10 June 2024
                        </p>
                    </div>
                </motion.div>
                {/* card4 */}
                <motion.div
                    className="flex flex-col rounded-lg bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  md:flex-row"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <img
                        className=" h-44 w-full rounded-t-lg object-cover md:h-auto md:w-40 md:rounded-none "
                        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                        alt="" />
                    <div className="flex flex-col justify-start p-6">
                        <h5
                            className="mb-2 text-xl font-medium text-white dark:text-neutral-50">
                            Card title
                        </h5>
                        <p className="mb-4 text-base text-white dark:text-neutral-200">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </p>
                        <h3 className="mb-2 text-xl font-medium text-white dark:text-neutral-50"> Price : $ 120 </h3>
                        <div className='flex items-center gap-2'>
                            <button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md"> <FaCartPlus size={23}></FaCartPlus> </button>
                            <button className="p-1 cursor-pointer w-fit text-white text-sm rounded-md">
                                <MdDelete className='text-red-500 ' size={28}></MdDelete>
                            </button>
                        </div>
                        <p className="text-xs text-white dark:text-neutral-300">
                            Last updated 3 mins ago
                        </p>
                        <p className="text-sm text-white dark:text-neutral-300 text-right ">
                            Date : 10 June 2024
                        </p>
                    </div>
                </motion.div>
                {/* Add more cards here with motion.div as above */}
            </motion.div>
        </>
    );
};

export default Wish_List;