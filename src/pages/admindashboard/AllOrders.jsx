import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AllOrders = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleStatusChange = (productId) => {
    // Simulate updating status to "Shipped"
    setData((prevData) =>
      prevData.map((product) =>
        product._id === productId ? { ...product, status: "Shipped" } : product
      )
    );
  };

  return (
    <div className="container mx-auto md:py-3 py-2 text-white ">
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-5 rounded-lg bg-50-50"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold pb-1 font-oswald ">All Orders </h1>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full mt-2">
              <tr className="text-[#FF9D00]  ">
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  N/A
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  Title Name
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg p-2">
                  Product Image
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  Category
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  Status
                </th>
              </tr>
              <AnimatePresence>
                {data?.map((product, i) => (
                  <motion.tr
                    key={product._id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <td className="border bg-gray-800 border-gray-400 p-2 text-center ">
                      {i + 1}
                    </td>
                    <td className="border bg-gray-800 border-gray-400 md:p-2 p-1  text-sm  ">
                      {product?.title?.slice(0, 30)}.....
                    </td>
                    <td className="border bg-gray-800 border-gray-400 p-2">
                      <img
                        className="w-20 md:h-16 rounded-lg  mx-auto "
                        src={product?.image[0]}
                        alt=""
                      />
                    </td>
                    <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md   text-center  ">
                      {product?.category}
                    </td>
                    <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md  text-center ">
                      {product.status === "Processing" ? (
                        <button
                          onClick={() => handleStatusChange(product._id)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Ship
                        </button>
                      ) : (
                        "Shipped"
                      )}
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
};

export default AllOrders;
