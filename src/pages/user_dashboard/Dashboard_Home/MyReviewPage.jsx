import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { StarRating } from "../../../Components/Shared/StarRating/StarRating";
import { Toaster, toast } from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useReviewProducts from "../../../Hooks/useReviewProducts";
import Swal from "sweetalert2";

const MyReviewPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const axiosPublic = useAxiosPublic();
  const [reviewProduct, reviewRefetch] = useReviewProducts();
  console.log(reviewProduct);

  // Function to handle review button click
  const handleReviewClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  useEffect(() => {
    if (selectedProduct && selectedProduct.comment) {
      setReviewText(selectedProduct.comment);
    } else {
      setReviewText(''); 
    }
  }, [selectedProduct]);

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };
const handleRatingChange = (newRating) => {
  setRating(newRating);
};
const onSubmit = async (formData) => {
  setLoading(true);
  try {
    const reviewInformation = {
      title: selectedProduct?.title,
      product_id: selectedProduct?.product_id,
      comment: formData.review,
      rating: rating
    };
    const res = await axiosPublic.patch(`/reviews/${selectedProduct?._id}`, reviewInformation);
    if (res?.data) {
      toast.success('Review Updated Successfully!');
      setSelectedProduct(prevProduct => ({
        ...prevProduct,
        comment: formData.review,
        rating: rating
      }));
    }
    // Close the modal
    setShowModal(false);
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Please Try Again ?");
  } finally {
    setLoading(false);
  }
};

  const handleDeleteReview = (id) => {
    console.log(id);
    Swal.fire({
      title: `Delete Review`,
      text: `Are you sure you want to delete the review?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/reviews/${id}`)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire("Deleted!", `Your review has been deleted.`, "success");
              reviewRefetch();
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

  const isReviewValid = reviewText?.length >= 20;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 md:py-3 py-2 text-gray-600"
      >
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg bg-50-50"
          >
            <div className="flex items-center justify-between">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl font-bold pb-1 font-oswald"
              >
                My reviews
              </motion.h1>
            </div>
            <div className="overflow-x-auto">
              {reviewProduct.length > 0 ? (
                <motion.table
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="w-full mt-2"
                >
                  <thead>
                    <tr className="text-[#FF9D00]">
                      <th className="border border-gray-600 text-sm md:text-md text-center lg:text-lg py-3">
                        No
                      </th>
                      <th className="border border-gray-600 text-sm md:text-md text-center lg:text-lg py-3">
                        Product ID
                      </th>
                      <th className="border border-gray-600 text-sm md:text-md text-center lg:text-lg py-3">
                        Product Title
                      </th>
                      <th className="border border-gray-600 text-sm md:text-md text-center lg:text-lg p-2">
                        Product Image
                      </th>
                      <th className="border border-gray-600 text-sm md:text-md text-center lg:text-lg py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviewProduct?.map((product, index) => (
                      <tr key={product._id}>
                        <td className="border border-gray-600 divide-gray-200 p-2 text-center">
                          {index + 1}
                        </td>
                        <td className="border border-gray-600 divide-gray-200 md:p-2 p-1 text-gray-900 text-sm">
                          {product?.product_id}
                        </td>
                        <td className="border border-gray-600 divide-gray-200 md:p-2 p-1 text-gray-900 text-sm">
                          {product?.title}
                        </td>
                        <td className="border border-gray-600 divide-gray-200 p-2">
                          <img
                            className="w-20 md:h-16 rounded-lg mx-auto"
                            src={product?.cover_image}
                            alt=""
                          />
                        </td>

                        <td className="border border-gray-600 divide-gray-200 p-2 ">
                          <div className="flex items-center justify-center lg:gap-6 md:gap-4 gap-2  ">
                            <span className="text-xl cursor-pointer ">
                              {" "}
                              <CiEdit
                                onClick={() => handleReviewClick(product)}
                              ></CiEdit>{" "}
                            </span>

                            <span
                              onClick={() => handleDeleteReview(product?._id)}
                              className="text-2xl text-red-600 cursor-pointer "
                            >
                              <MdDelete></MdDelete>{" "}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </motion.table>
              ) : (
                <div className="flex lg:my-20 md:my-16 my-4 justify-center  text-center   ">
                  <p className=" text-gray-600 text-md">No reviews found</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Modal component */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="lg:w-4/12 mx-auto bg-gray-300 p-6 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="block md:text-2xl text-center text-gray-800 text-sm font-bold mb-2">
                {selectedProduct?.title}
              </h2>
              <div className="mb-4 px-1 text-center mt-6">
                <label
                  className="block md:text-2xl text-gray-800 text-sm font-bold "
                  htmlFor="rating"
                >
                  Rating
                </label>
                <div className="text-center text-2xl ">
                  <StarRating rating={rating} onChange={handleRatingChange}  ></StarRating>
                </div>
              </div>

              <div className="mb-2 px-1">
                <label
                  className="block md:text-xl text-gray-800 text-sm font-bold mb-2"
                  htmlFor="review"
                >
                  Review
                </label>
                <textarea
                  className="w-full h-auto md:min-h-40 min-h-32 px-2 py-2 text-black border rounded-lg bg-gray-100 focus:outline-none border-gray-600 focus:border-blue-500"
                  id="review"
                  placeholder="Review"
                  {...register("review", { required: true })}
                  value={reviewText} // Assign reviewText to value attribute
                  onChange={handleReviewChange}
                />
              </div>
              <div>{isReviewValid ? "" : "Minimum 20 Words Review"}</div>

              <div className="flex items-center gap-3 text-right mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-full bg-gray-900 hover:shadow-lg font-semibold text-gray-300 px-6 py-2"
                >
                  {" "}
                  Close{" "}
                </button>
                <button
                  type="submit"
                  disabled={!isReviewValid}
                  className={`rounded-full bg-gray-900 hover:shadow-lg font-semibold text-gray-300 px-6 py-2 ${
                    !isReviewValid ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Loading..." : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default MyReviewPage;