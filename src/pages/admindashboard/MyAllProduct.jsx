import useAllProduct from "../../Hooks/useAllProduct";
import { motion, AnimatePresence } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingPage from "../../Components/Shared/Loading/LoadingPage";

export default function MyAllProduct() {
  const axiosPublic = useAxiosPublic();

  const searchItems = "";

  const { products, isLoading, productRefetch } = useAllProduct(
    1,
    12,
    searchItems
  );

  const handleDeleteProduct = (id, title) => {
    console.log(id);
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
          .delete(`/products/${id}`)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire(
                "Deleted!",
                `Your product "${title}" has been deleted.`,
                "success"
              );
              productRefetch();
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

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <LoadingPage></LoadingPage>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="px-5">
        <h1 className="text-4xl font-bold text-center text-black py-5">
          All Product List
        </h1>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-xl"
        >
          <div className="overflow-x-auto text-black">
            <table className="w-full mt-2">
              <tr className="text-[#FF9D00] bg-gray-700">
                <th className="text-center text-sm md:text-md lg:text-lg py-3">
                  No
                </th>
                <th className="text-center text-sm md:text-md lg:text-lg py-3">
                  Title Name
                </th>
                <th className="text-center text-sm md:text-md lg:text-lg py-3">
                  Model
                </th>
                <th className="text-center text-sm md:text-md lg:text-lg p-2">
                  Image
                </th>
                <th className="text-center text-sm md:text-md lg:text-lg p-2">
                  Category
                </th>
                <th className="text-center text-sm md:text-md lg:text-lg py-3">
                  Stock
                </th>
                <th className="text-center text-sm md:text-md lg:text-lg py-3">
                  Country
                </th>
                <th className="text-center text-sm md:text-md lg:text-lg py-3">
                  Price
                </th>
                <th className="text-center text-sm md:text-md lg:text-lg py-3">
                  Available
                </th>
                <th className="text-center text-sm md:text-md lg:text-lg py-3">
                  Action
                </th>
              </tr>

              <AnimatePresence>
                {products?.map((product, i) => (
                  <motion.tr
                    key={product._id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gray-400"
                  >
                    <td className="p-2 text-center ">{i + 1}</td>
                    <td className="md:p-2 p-1 text-sm  ">
                      {product?.title?.slice(0, 30)}.....
                    </td>
                    <td className="md:p-2 p-1 text-sm">{product?.model}</td>
                    <td className="p-2">
                      <img
                        className="w-20 md:h-16 rounded-lg mx-auto"
                        src={product?.image[0]}
                        alt=""
                      />
                    </td>

                    <td className="p-2 text-sm md:text-md text-center  ">
                      {product?.category}
                    </td>
                    <td className="p-2 text-sm md:text-md text-center  ">
                      {product?.quantity}
                    </td>
                    <td className="p-2 text-sm md:text-md text-center  ">
                      {product?.country_of_origin}
                    </td>
                    <td className="p-4 text-sm md:text-md text-center  ">
                      $ {product?.price}
                    </td>
                    <td className="p-2 text-sm md:text-md text-center  ">
                      {product?.availability}
                    </td>
                    <td className="p-2 text-sm md:text-md  text-center ">
                      <div className="flex items-center justify-center lg:gap-6 md:gap-4 gap-2  ">
                        <Link to={`/dashboard/update_product/${product?._id}`}>
                          <span className="text-xl cursor-pointer ">
                            {" "}
                            <CiEdit></CiEdit>{" "}
                          </span>
                        </Link>

                        <span
                          onClick={() =>
                            handleDeleteProduct(product?._id, product?.title)
                          }
                          className="text-2xl text-red-600 cursor-pointer "
                        >
                          <MdDelete></MdDelete>{" "}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
