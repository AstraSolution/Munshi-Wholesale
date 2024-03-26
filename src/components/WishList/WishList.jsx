import React from 'react';
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import useWishListdata from "../../hooks/wishlist/useWishListdata";

const WishList = () => {
    const axiosPublic = useAxiosPublic();
    const [wishListProduct, WishlistReFetech] = useWishListdata();
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

    return (
        <div>
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-8 text-center">My Wishlist</h1>
                <table className="w-full table-auto shadow-md rounded-md overflow-hidden border border-gray-500">
                    <thead className='text-center'>
                        <tr className="bg-gray-200 font-semibold text-center text-xl">
                            <th className="py-4 px-6 border border-gray-500">Product Image</th>
                            <th className="py-4 px-6 border border-gray-500 text-center">Product name</th>
                            <th className="py-4 px-6 border border-gray-500 text-center">Unit price</th>
                            <th className="py-4 px-6 border border-gray-500 text-center">Stock status</th>
                            <th className="py-4 px-6 border border-gray-500 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishListProduct?.map((item) => (
                            <tr key={item._id} className="border-b border-gray-500 hover:bg-gray-100">
                                <td className="py-4 px-6 text-left whitespace-nowrap border border-gray-500">
                                    <img src={item?.product_image[0]} alt="" className="h-20 w-20 mx-auto rounded-md" />
                                </td>
                                <td className="py-4 px-6 text-left whitespace-nowrap border border-gray-500">
                                    {item?.title}
                                </td>
                                <td className="py-4 px-6 text-center whitespace-nowrap border border-gray-500">
                                    ${item?.total_price}
                                </td>
                                <td className="py-4 px-6 text-center border border-gray-500">
                                    {item?.stock_limit}
                                </td>
                                <td className="py-4 flex items-center gap-6 px-6 text-center border border-gray-500">
                                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">Add to cart</button>
                                    <button onClick={() => handleProductDelete(item._id, item.title)} className="text-2xl text-red-600 focus:outline-none">&times;</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;
