import useGetAllOrders from "../../Hooks/useGetAllOrders";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllOrders = () => {
  const { orders, refetchOrder } = useGetAllOrders()
  const axiosSecure = useAxiosSecure();

  const handleStatusChange = async(orderId) => {
    const res = await axiosSecure.patch(`/orders/${orderId}`, { status: "Shipped", updatedAt: Date.now() })
    if (res?.data) {
      refetchOrder()
    }
  };

  return (
    <div className="container mx-auto md:py-3 text-white">
      <div className="space-y-2">
        <div className="p-5 rounded-lg bg-50-50">
          <div>
            <h1 className="text-4xl font-bold text-center text-black py-5">All Orders</h1>
          </div>

          <div className="overflow-x-auto rounded-lg text-black">
            <table className="">
              <thead className="bg-gray-700">
                <tr className="text-orange-500 border text-sm md:text-md lg:text-lg">
                  <th className="text-center">No</th>
                  <th className="text-center">Image</th>
                  <th className="text-center">Title</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Client Name</th>
                  <th className="text-center">Client Email</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody className="font-medium">
                {orders?.map((order, i) => (
                  <tr key={order._id} className="bg-gray-400 text-sm md:text-md">
                    <td className="text-center">{i + 1}</td>
                    <td className="cursor-pointer text-center font-bold">
                      <img className="w-20 md:h-16 rounded-lg mx-auto" src={order?.cover_image[0]} alt="" />
                    </td>
                    <td className="text-center">{order?.title?.slice(0, 30)}</td>
                    <td className="text-center">{order?.quantity}</td>
                    <td className="text-center">{order?.totalPrice}</td>
                    <td className="text-center">{order?.customer_name}</td>
                    <td className="text-center">{order?.clientEmail}</td>
                    <td className="text-center">
                      {order.status === "Processing" ? (
                        <button
                          onClick={() => handleStatusChange(order._id)}
                          className="bg-orange-400 px-3 py-2 rounded-xl text-black font-semibold"
                        >
                          Ship
                        </button>
                      ) : (
                        order?.status
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
