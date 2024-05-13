import { motion, AnimatePresence } from "framer-motion";
import useGetAllOrders from "../../Hooks/useGetAllOrders";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllOrders = () => {
  const { orders, refetchOrder } = useGetAllOrders()
  const axiosSecure = useAxiosSecure();

  const handleStatusChange = async(orderId) => {
    const res =  await axiosSecure.patch(`/orders/${orderId}`, { status: "Shiped", updatedAt: Date.now()})
    if(res?.data){
      refetchOrder()
    }
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
                  SI
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg p-2">
                  Image
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  Title
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  Quantity
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  Price
                </th>
              
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  Client Name
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  Client Email
                </th>
                <th className="border bg-gray-800 border-gray-400 text-center text-sm md:text-md lg:text-lg py-3">
                  Status
                </th>
              </tr>
              <AnimatePresence>
                {orders?.map((order, i) => (
                  <motion.tr
                    key={order._id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <td className="border bg-gray-800 border-gray-400 p-2 text-center ">
                      {i + 1}
                    </td>
                    <td className="border bg-gray-800 border-gray-400 p-2">
                      <img
                        className="w-20 md:h-16 rounded-lg  mx-auto "
                        src={order?.cover_image[0]}
                        alt=""
                      />
                    </td>
                    <td className="border bg-gray-800 border-gray-400 md:p-2 p-1  text-sm  ">
                      {order?.title?.slice(0, 30)}
                    </td>
                 
                    <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md   text-center  ">
                      {order?.quantity}
                    </td>
                 
                    <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md   text-center  ">
                      {order?.totalPrice}
                    </td>
                 
                    <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md   text-center  ">
                      {order?.customer_name}
                    </td>
                    <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md   text-center  ">
                      {order?.clientEmail}
                    </td>
                    <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md  text-center ">
                      {order.status === "Processing" ? (
                        <button
                          onClick={() => handleStatusChange(order._id)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Ship
                        </button>
                      ) : (
                         order?.status
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
