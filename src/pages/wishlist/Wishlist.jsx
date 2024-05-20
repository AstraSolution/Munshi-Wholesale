
import { motion, AnimatePresence } from "framer-motion";
import useWishlistProducts from "../../Hooks/useWishlistProducts";
import WishListProduct from "./WishListProduct";
import { Link } from "react-router-dom";
import LoadingPage from "../../Components/Shared/Loading/LoadingPage";


const Wishlist = () => {

    const {wishlistProduct, isLoading, refetchWishlist} = useWishlistProducts();



    if (isLoading) {
        return (
            <div className="min-h-screen">
               <LoadingPage></LoadingPage>
            </div>
        );
    }

    if (wishlistProduct?.length === 0) {
        return (
            <div className="  items-center justify-center text-center my-20  ">
                <p className=" my-10 px-4 ">Your Wishlist is empty.</p>
                <Link
                    to={'/shop'}
                    className="button-color px-4 py-2 border rounded-full text-sm md:text-base "
                >
                    Add to wishlist
                </Link>
            </div>
        );
    }

   


    return (
        <div className="container mx-auto md:py-3 my-10 text-gray-800 bg-white  ">

            <div className="space-y-2">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="rounded-lg"
                >
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold pb-1  "> Wish List Product  </h1>

                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full mt-2">
                            <tr className="text-[#FF9D00]  ">
                                <th className="border bg-gray-100 border-gray-300 text-center text-sm md:text-md lg:text-lg py-3">
                                    N/A
                                </th>
                                <th className="border bg-gray-100 border-gray-300 text-center text-sm md:text-md lg:text-lg py-3">
                                    Title Name
                                </th>
                                <th className="border bg-gray-100 border-gray-300 text-center text-sm md:text-md lg:text-lg p-2">
                                    Product Image
                                </th>
                                <th className="border bg-gray-100 border-gray-300 text-center text-sm md:text-md lg:text-lg p-2">
                                    Color
                                </th>
                                <th className="border bg-gray-100 border-gray-300 text-center text-sm md:text-md lg:text-lg py-3">
                                    Stock Limit
                                </th>
                                <th className="border bg-gray-100 border-gray-300 text-center text-sm md:text-md lg:text-lg py-3">
                                    Unit Price
                                </th>
                                <th className="border bg-gray-100 border-gray-300 text-center text-sm md:text-md lg:text-lg py-3">
                                    Total Price
                                </th>
                                <th className="border bg-gray-100 border-gray-300 text-center text-sm md:text-md lg:text-lg py-3">
                                    Action
                                </th>
                            </tr>


                            <AnimatePresence>
                                {
                                    wishlistProduct?.map((product, i) => <WishListProduct key={product._id} product={product} refetchWishlist={refetchWishlist} i={i} ></WishListProduct>)
                                }
                            </AnimatePresence>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Wishlist;
