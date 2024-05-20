import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { useForm } from "react-hook-form";
import { StarRating } from "../../Components/Shared/StarRating/StarRating";
import { Toaster, toast } from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useOrders from "../../Hooks/useOrders";
import useCurrentUser from "../../Hooks/useCurrentUser";

const My_Order_Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const axiosPublic = useAxiosPublic();
  const { currentUser } = useCurrentUser();

  const {myOrders} = useOrders();

  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered orders based on status and search query
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    if (myOrders) {
      let filtered = myOrders;
      if (selectedStatus !== "all") {
        filtered = filtered.filter((order) => order.status === selectedStatus);
      }
      if (searchQuery) {
        filtered = filtered.filter((order) =>
          order.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      setFilteredOrders(filtered);
    }
  }, [myOrders, selectedStatus, searchQuery]);

  // date and time format convert
  function convertToLocalTime(utcTimeString) {
    const utcTime = new Date(utcTimeString);
    const localTime = new Date(
      utcTime.getTime() - utcTime.getTimezoneOffset() * 60
    );
    return localTime.toLocaleString();
  }

  // Function to handle review button click
  const handleReviewClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const reviewInformation = {
        title: selectedProduct?.title,
        product_id: selectedProduct?.product_id,
        comment: formData.review,
        rating: rating,
        user_name: currentUser?.fullName,
        user_email: currentUser?.email,
        image: selectedProduct?.cover_image[0],
      };
  
      console.log(reviewInformation);
      

      const res = await axiosPublic.post("/reviews", reviewInformation);
      if (res?.data) {
        toast.success("Review Add Successful!");
      }
      console.log(res.data);
      reset({ review: '' });
      // Close the modal
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Please Try Again ?");
    } finally {
      setLoading(false);
    }
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
                My Order
              </motion.h1>
              <div className="flex items-center justify-between md:gap-6 gap-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative w-full"
                >
                  <input
                    type="text"
                    id="search"
                    className="bg-gray-100 border border-gray-800 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-2 text-gray-900"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <p className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <IoIosSearch size={23} className="min-w-max" />
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="py-2 px-1 md:w-60"
                >
                  <select
                    className="w-full px-4 py-2 md:py-2 text-md text-gray-600 border-gray-600 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500 font-oswald"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="Processing">Processing</option>
                    <option value="Canceled">Canceled</option>
                    <option className="pb-2" value="Complete">
                      Complete
                    </option>
                  </select>
                </motion.div>
              </div>
            </div>

            <div className="overflow-x-auto">
              {filteredOrders.length > 0 ? (
                <motion.table
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="w-full mt-2"
                >
                  <tr className="text-[#FF9D00]">
                    <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">
                      N/A
                    </th>
                    <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">
                      Title Name
                    </th>
                    <th className="border border-gray-600 text-sm md:text-md lg:text-lg p-2">
                      Product Image
                    </th>
                    <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">
                      Order date
                    </th>
                    <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">
                      Total Price
                    </th>
                    <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">
                      Status
                    </th>
                    <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">
                      Review
                    </th>
                  </tr>
                  {filteredOrders.map((product, i) => (
                    <motion.tr
                      key={product._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                    >
                      <td className="border border-gray-600 divide-gray-200 p-2 text-center">
                        {i + 1}
                      </td>
                      <td className="border border-gray-600 divide-gray-200 md:p-2 p-1 text-gray-900 text-sm">
                        {product?.title?.slice(0, 30)}.....
                      </td>
                      <td className="border border-gray-600 divide-gray-200 p-2">
                        <img
                          className="w-20 md:h-16 rounded-lg mx-auto"
                          src={product?.cover_image?.[0]}
                          alt=""
                        />
                      </td>
                      <td className="border border-gray-600 divide-gray-200 p-2 text-sm md:text-md text-center">
                        {convertToLocalTime(product?.orderDate)}
                      </td>
                      <td className="border border-gray-600 divide-gray-200 p-2 text-sm md:text-md text-center">
                        {product?.totalPrice.toFixed(2)}
                      </td>
                      <td
                        className={`border border-gray-600 text-gray-900 divide-gray-200 p-2 text-sm md:text-md text-center 
                        ${
                          product?.status === "Processing"
                            ? "text-yellow-900"
                            : product?.status === "Canceled"
                            ? "text-red-600"
                            : product?.status === "Complete"
                            ? "text-green-600"
                            : ""
                        }`}
                      >
                        {product?.status}
                      </td>
                      <td
                        onClick={() => handleReviewClick(product)}
                        className="border cursor-pointer border-gray-600 divide-gray-200 p-2 text-sm md:text-md text-center"
                      >
                        Review
                      </td>
                    </motion.tr>
                  ))}
                </motion.table>
              ) : (
                <div className="flex lg:my-20 md:my-16 my-4 justify-center  text-center   ">
                  <p className=" text-gray-600 text-md">No orders found </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

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
                    <StarRating
                      rating={rating}
                      onChange={setRating}
                    ></StarRating>
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
                    value={reviewText}
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
      </motion.div>
      <Toaster />
    </>
  );
};

export default My_Order_Page;
