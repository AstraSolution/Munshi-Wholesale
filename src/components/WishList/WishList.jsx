import React, { useContext } from 'react';
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import useWishListdata from "../../hooks/wishlist/useWishListdata";
import { Link } from 'react-router-dom';
import { MdDelete, MdAddShoppingCart } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useMyCarts from '../../hooks/carts/useMyCarts';


const WishList = () => {
    const axiosPublic = useAxiosPublic();
    const [wishListProduct, WishlistReFetech] = useWishListdata();
    const { user } = useContext(AuthContext);
    const { refetch } = useMyCarts()
    console.log(wishListProduct);

    const handleProductDelete = (id, title) => {
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
                        console.log(response.data);
                        if (response.status === 200) {
                            Swal.fire(
                                "Deleted!",
                                `Your product "${title}" has been deleted.`,
                                "success"
                            );
                            WishlistReFetech();
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



    const handleAddToCart = async (product, id, title) => {
        console.log(product);
        const images = product?.product_image || [];
        const color = product?.color || [];
        const product_id = product._id || [];
        console.log(product_id);

        const cartData = {
            customer_name: product?.customer_name || "",
            customer_email: product?.customer_email || "",
            product_id,
            unit_price: product?.unit_price,
            total_price: product?.unit_price,
            quantity: 1,
            product_image: [...images],
            stock_limit: product?.quantity,
            title: product?.title,
            color: [...color],
        };

        console.log(cartData);
        if (user) {

            axiosPublic
                .post("/myCarts", cartData)
                .then((response) => {
                    if (response.status === 200) {
                        toast.success("Add to Cart Successfull")
                        axiosPublic
                            .delete(`/wishlist/${id}`)
                            .then((response) => {
                                if (response.status === 200) {
                                    WishlistReFetech();
                                } else {
                                    toast.error("Try Again")
                                }
                            })
                            .catch((error) => {
                                console.error("Error deleting Book:", error);
                                toast.error("Try Again")
                            });
                        refetch();
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });

        } else {
            toast.error("Please Login Now ")
        }
    };






    if (wishListProduct.length === 0) {
        return (
            <div className="text-center my-20">
                <p className=" my-10 font-bold text-sm md:text-xl lg:text-2xl">Your Wishlist is empty.</p>
                <Link to="/allProducts">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Add to wishlist
                        </span>
                    </button>
                </Link>

            </div>
        );
    }




    return (
        <div className="overflow-x-auto py-10 ">
            <table className="w-full divide-y ">
                <thead className="bg-gray-800">
                    <tr className='text-white font-mono '>
                        <th className="py-2  px-4"> S No  </th>
                        <th className="py-2 px-4"> Image </th>
                        <th className="py-2 px-4">Name </th>
                        <th className="py-2 px-4"> Dimensions </th>
                        <th className="py-2 px-4"> Price</th>
                        <th className="py-2 px-4"> Stock</th>
                        <th className="py-2 px-4"> Color</th>
                        <th className="py-2 px-4"> Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y bg-sky-500">
                    {
                        wishListProduct?.map((product, i) => (

                            <tr className="py-4">
                                <td className="py-2 px-2 md:px-3 lg:px-5">{i + 1} </td>
                                <td className="py-2 flex items-center">
                                    <img src={product?.product_image[0]} alt="" className='w-12 h-12 rounded-full mr-2  ' />
                                    <img src={product?.product_image[1]} alt="" className='w-12 h-12  rounded-full mr-2 lg:block hidden' />
                                </td>
                                <td className="py-2 font-mono">{product?.title}</td>
                                <td className="py-2 font-mono">{product?.dimensions} </td>
                                <td className="py-2">
                                    <p className="status delivered font-bold px-1 "> ${product?.unit_price} </p>
                                </td>
                                <td className="py-2 ">
                                    <p className='status delivered font-bold px-1'>  {product?.stock_limit}</p>
                                </td>

                                <td className="py-2 ">
                                    <strong> {product?.color[0]}</strong>
                                    <strong> {product?.color[1]}</strong>
                                    <strong> {product?.color[2]}</strong>
                                    <strong> {product?.color[3]}</strong>
                                </td>
                                <td>
                                    <div className='flex items-center lg:gap-3 md:gap-2 gap-2 px-2' >
                                        <button onClick={() => handleAddToCart(product, product._id, product.title)} className=' lg:text-3xl text-xl md:text-2xl '> <MdAddShoppingCart></MdAddShoppingCart> </button>
                                        <button className='lg:text-3xl text-xl md:text-2xl  text-red-800 ' onClick={() => handleProductDelete(product._id, product.title)}> <MdDelete></MdDelete> </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    {/* <!-- Additional rows go here --> */}
                </tbody>
            </table>
            <Toaster></Toaster>
        </div>




    );
};

export default WishList;
