import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { StarRating } from '../../Components/Shared/StarRating/StarRating';
import UseAxios from '../../Hooks/useAxios';
import { Toaster, toast } from 'react-hot-toast';

const My_Order_Page = () => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const instance = UseAxios()

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
        product_id: selectedProduct?._id,
        review: formData.review,
        rating: rating
      }

      console.log(reviewInformation);


      const res = await instance.post("/reviews", reviewInformation);
      console.log(res.data);
      if (res?.data) {
        toast.success('Review Successfull!')
      }
      reset({ review: '' });
      // Close the modal
      setShowModal(false);


    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Please Try Again ? ");
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  };


  const isReviewValid = reviewText?.length >= 20;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" px-4 md:py-3 py-2  text-gray-300 "
      >
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" rounded-lg bg-50-50"
          >
            <div className='flex items-center justify-between'>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl font-bold pb-1 font-oswald"
              >
                My Order
              </motion.h1>
              <div className='flex items-center justify-between md:gap-6 gap-2'>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className='relative w-full'
                >
                  <input
                    type='text'
                    id='search'
                    className='bg-gray-800 border text-gray-300 border-gray-600 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full py-2 px-2 dark:text-gray-300'
                    placeholder='Search...'
                  />
                  <button type='button' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    <IoIosSearch size={23} className='min-w-max' />
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className='py-2 px-1 md:w-60 '
                >
                  <select
                    className='w-full px-4 py-1 md:py-1.5 text-gray-300 border-gray-600 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 font-oswald'
                  >
                    <option value='all'>All</option>
                    <option value='pending'>Pending</option>
                    <option value='canceled'>Canceled</option>
                    <option className='pb-2' value='done'>Done</option>
                  </select>
                </motion.div>
              </div>
            </div>

            <div className="overflow-x-auto ">
              <motion.table
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="w-full mt-2 "
              >
                <tr className='text-[#FF9D00]'>
                  <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">N/A</th>
                  <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">Title Name</th>
                  <th className="border border-gray-600 text-sm md:text-md lg:text-lg p-2">Product Image</th>
                  <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">Category</th>
                  <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">Status</th>
                  <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">Review</th>
                  <th className="border border-gray-600 text-sm md:text-md lg:text-lg py-3">Action</th>
                </tr>
                {
                  data?.map((product, i) => (
                    <motion.tr
                      key={product.i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + (i * 0.1) }}
                    // className={i % 2 === 0 ? 'bg-black' : 'bg-gray-800'}

                    >
                      <td className="border border-gray-600 bg-gray-800  p-2 text-center">{i + 1}</td>
                      <td className="border border-gray-600 bg-gray-800  md:p-2 p-1 text-sm">{product?.title?.slice(0, 30)}.....</td>
                      <td className="border border-gray-600 bg-gray-800  p-2">
                        <img className='w-20 md:h-16 rounded-lg mx-auto' src={product?.image[0]} alt="" />
                      </td>
                      <td className="border border-gray-600 bg-gray-800  p-2 text-sm md:text-md text-center">{product?.category}</td>
                      <td className="border border-gray-600 bg-gray-800  p-2 text-sm md:text-md text-center">Pending</td>
                      <td onClick={() => handleReviewClick(product)} className="border cursor-pointer border-gray-600 bg-gray-800  p-2 text-sm md:text-md text-center">Review</td>
                      <td className="flex items-center justify-center gap-3 md:py-6 py-4 border border-gray-600 bg-gray-800  p-2">
                        <span className="p-2 w-fit  cursor-pointer text-sm rounded-md">
                          Cancel
                        </span>
                      </td>
                    </motion.tr>
                  ))
                }
              </motion.table>
            </div>
          </motion.div>
        </div>

        {/* Modal component */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="lg:w-4/12 mx-auto bg-gray-800 p-6 rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="block md:text-2xl text-center text-gray-300 text-sm font-bold mb-2">{selectedProduct?.title}</h2>
                <div className="mb-4 px-1 text-center mt-6">
                  <label className="block md:text-2xl text-gray-300 text-sm font-bold mb-2" htmlFor="rating">
                    Rating
                  </label>
                  <div className='text-center text-2xl '>
                    <StarRating rating={rating} onChange={setRating}></StarRating>
                  </div>
                </div>

                <div className="mb-4 px-1">
                  <label className="block md:text-xl text-gray-300 text-sm font-bold mb-2" htmlFor="review">
                    Review
                  </label>
                  <textarea
                    className="w-full h-auto md:min-h-60 min-h-32 px-2 py-2 text-gray-300 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                    id="review"
                    placeholder="Review"
                    {...register("review", { required: true })}
                    value={reviewText}
                    onChange={handleReviewChange}

                  />
                </div>
                <div>
                  {
                    isReviewValid ? "" : "Minimum 20 Words Review"
                  }
                </div>

                <div className='flex items-center gap-3 text-right mt-10'>
                  <button onClick={() => setShowModal(false)} className="rounded-full bg-gray-900 hover:shadow-lg font-semibold text-gray-300 px-6 py-2"> Close </button>
                  <button type="submit" disabled={!isReviewValid} className={`rounded-full bg-gray-900 hover:shadow-lg font-semibold text-gray-300 px-6 py-2 ${!isReviewValid ? 'opacity-50 cursor-not-allowed' : ''}`}>
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