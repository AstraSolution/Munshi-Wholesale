
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useCurrentUser from "../../Hooks/useCurrentUser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const WishListProduct = ({ product, refetch, i }) => {


    const { _id, product_image, title, color, stock_limit, total_price, unit_price, dimensions } = product || {}

    const axiosPublic = useAxiosPublic();
    const { currentUser } = useCurrentUser()
    console.log(currentUser);

    const handleDeleteProduct = (id, title) => {
        Swal.fire({
            title: `Delete product`,
            text: `Are you sure you want to delete the product "${title}"?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic
                    .delete(`/wishlist/${id}`)
                    .then((response) => {
                        if (response.status === 200) {
                            ;
                            Swal.fire(
                                "Deleted!",
                                `Your product "${title}" has been deleted.`,
                                "success"
                            );
                            refetch();
                        } else {
                            Swal.fire(
                                "Error!",
                                "An error occurred while deleting the product.",
                                "error"
                            );
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting product:", error);
                        Swal.fire(
                            "Error!",
                            "An error occurred while deleting the product.",
                            "error"
                        );
                    });
            }
        });
    };



    const handleAddToCart = () => {

        const addCart = {
            customer_name: currentUser?.fullName,
            customer_email: currentUser?.email,
            product_id: _id,
            unit_price,
            total_price,
            quantity: 1,
            product_image,
            stock_limit,
            title,
            dimensions,
            color,
        };

        console.log(addCart);

        axiosPublic
            .post("/myCarts", addCart)
            .then((response) => {
                if (response.status === 200) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product add to cart successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };





    return (

        <motion.tr
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <td className="border bg-gray-800 border-gray-600 p-2 text-center ">
                {i + 1}
            </td>
            <td className="border bg-gray-800 border-gray-600 md:p-2 p-1  text-sm  ">
                {title?.slice(0, 30)}.....
            </td>
            <td className="border bg-gray-800 border-gray-600 p-2">
                <img
                    className="w-20 md:h-16 rounded-lg  mx-auto "
                    src={product_image[0]}
                    alt=""
                />
            </td>
            <td className="border bg-gray-800 border-gray-600 p-2 text-sm md:text-md   text-center  ">
                {color}
            </td>
            <td className="border bg-gray-800 border-gray-600 p-2 text-sm md:text-md   text-center  ">
                {stock_limit}
            </td>
            <td className="border bg-gray-800 border-gray-600 p-2 text-sm md:text-md   text-center  ">
                $ {unit_price}
            </td>
            <td className="border bg-gray-800 border-gray-600 p-2 text-sm md:text-md   text-center  ">
                $ {total_price}
            </td>
            <td className="border bg-gray-800 border-gray-600 p-2 text-sm md:text-md  text-center ">

                <div className="flex items-center justify-center lg:gap-6 md:gap-4 gap-2  ">

                    <span onClick={() => handleAddToCart()} className="text-xl cursor-pointer "> <FaCartPlus></FaCartPlus> </span>


                    <span onClick={() => handleDeleteProduct(_id, title)} className="text-xl text-red-600 cursor-pointer "><MdDelete></MdDelete> </span>
                </div>
            </td>
        </motion.tr>

    );
};

export default WishListProduct;