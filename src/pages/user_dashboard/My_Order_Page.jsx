import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { StarRating } from '../../Components/Shared/StarRating/StarRating';


const My_Order_Page = () => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

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


  const onSubmit = async (formData) => {
    setLoading(true); 
    try {
      const reviewInformation = {
        title: selectedProduct?.title,
        review: formData.review,
        rating: rating
      }
      
      console.log(reviewInformation);
    

      // Close the modal
      setShowModal(false);

      // Reset form fields
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  };



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto md:py-3 py-2 text-white"
    >
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 rounded-lg bg-50-50"
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
                  className='bg-gray-800 border text-white text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full py-2 px-2 dark:text-white'
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
                className='py-2 px-1 md:w-44'
              >
                <select
                  className='w-full px-4 py-1 md:py-1.5 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 font-oswald'
                >
                  <option value='all'>All</option>
                  <option value='burger'>Burger</option>
                  <option value='snack'>Snack</option>
                  <option className='pb-2' value='beverage'>Beverage</option>
                </select>
              </motion.div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <motion.table
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-full mt-2"
            >
              <tr className='text-[#FF9D00]'>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">N/A</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">Title Name</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg p-2">Product Image</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">Category</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">Status</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">Review</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">Action</th>
              </tr>
              {
                data?.map((product, i) => (
                  <motion.tr
                    key={product.i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + (i * 0.1) }}
                  >
                    <td className="border border-gray-400 p-2 text-center">{i + 1}</td>
                    <td className="border border-gray-400 md:p-2 p-1 text-sm">{product?.title?.slice(0, 30)}.....</td>
                    <td className="border border-gray-400 p-2">
                      <img className='w-20 md:h-16 rounded-lg mx-auto' src={product?.image[0]} alt="" />
                    </td>
                    <td className="border border-gray-400 p-2 text-sm md:text-md text-center">{product?.category}</td>
                    <td className="border border-gray-400 p-2 text-sm md:text-md text-center">Pending</td>
                    <td onClick={() => handleReviewClick(product)} className="border cursor-pointer border-gray-400 p-2 text-sm md:text-md text-center">Review</td>
                    <td className="flex items-center justify-center gap-3 md:py-6 py-4 border border-gray-400 p-2">
                      <Link >
                        <span className="p-2 w-fit text-white cursor-pointer text-sm rounded-md">
                          Cancel
                        </span>
                      </Link>
                      <span className="md:p-2 p-3 cursor-pointer w-fit text-white text-sm rounded-md">
                        Delete
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
              <h2 className="block md:text-2xl text-white text-sm font-bold mb-2">Review for : {selectedProduct?.title}</h2>
              <div className="mb-4 px-1 text-center mt-6">
                <label className="block md:text-2xl text-white text-sm font-bold mb-2" htmlFor="rating">
                  Rating
                </label>
                <div className='text-center text-2xl '>
                  {/* <Star_Rating rating={rating} onChange={setRating} /> */}
                  <StarRating rating={rating} onChange={setRating}></StarRating>
                </div>
              </div>

              <div className="mb-4 px-1">
                <label className="block md:text-2xl text-white text-sm font-bold mb-2" htmlFor="review">
                  Review
                </label>
                <textarea
                  className="w-full h-auto md:min-h-60 min-h-32 px-2 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
                  id="review"
                  placeholder="Review"
                  {...register("review", { required: true })}
                />
              </div>

              <div className='flex items-center gap-3 text-right mt-10'>
                <button onClick={() => setShowModal(false)} className="rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"> Close </button>
                <button type="submit" className="rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                  {loading ? "Loading..." : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default My_Order_Page;
