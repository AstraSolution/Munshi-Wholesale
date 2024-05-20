import useAllProduct from "../../Hooks/useAllProduct";
import { motion, AnimatePresence } from "framer-motion";

import LoadingPage from "../../Components/Shared/Loading/LoadingPage";

export default function TopProducts() {
  const searchItems = "";

  const { products, isLoading } = useAllProduct(1, 10, searchItems);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <LoadingPage />
      </div>
    );
  }

  // Function to shuffle the products array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Ensure products is an array before shuffling
  const shuffledProducts = Array.isArray(products)
    ? shuffleArray([...products])
    : [];

  return (
    <div>
      <div className="px-2 md:py-3 my-10 text-gray-800 bg-white">
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="rounded-lg"
          >
            <div>
              <h1 className="text-3xl font-bold pb-1 text-center mt-7">
                Top Products{" "}
              </h1>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full mt-2">
                <thead>
                  <tr className="text-[#FF9D00]">
                    <th className="border bg-gray-300 border-gray-200 text-center py-3">
                      N/A
                    </th>
                    <th className="border bg-gray-300 border-gray-200 text-center  py-3">
                      Title Name
                    </th>
                    <th className="border bg-gray-300 border-gray-200 p-2 text-center">
                      Image
                    </th>
                    <th className="border bg-gray-300 border-gray-200 text-center p-2">
                      Category
                    </th>
                    <th className="border bg-gray-300 border-gray-200 text-center  py-3">
                      Stock
                    </th>
                    <th className="border bg-gray-300 border-gray-200 text-center py-3">
                      Country
                    </th>
                    <th className="border bg-gray-300 border-gray-200 text-center py-3">
                      Price
                    </th>
                    <th className="border bg-gray-300 border-gray-200 text-center py-3">
                      Available
                    </th>
                  </tr>
                </thead>
                <AnimatePresence>
                  {shuffledProducts.map((product, i) => (
                    <motion.tr
                      key={product._id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <td className="border text-center">
                        {i + 1}
                      </td>
                      <td className="border text-center">
                        {product?.title}
                      </td>
                      <td className="border text-center">
                        <img
                          className="w-20 md:h-16 rounded-lg mx-auto"
                          src={product?.image[0]}
                          alt=""
                        />
                      </td>
                      <td className="border text-center">
                        {product?.category}
                      </td>
                      <td className="border text-center">
                        {product?.quantity}
                      </td>
                      <td className="border text-center">
                        {product?.country_of_origin}
                      </td>
                      <td className="border text-center">
                        $ {product?.price}
                      </td>
                      <td className="border text-center">
                        {product?.availability}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
