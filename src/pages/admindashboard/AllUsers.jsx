import { useState } from "react";
import useAllUsers from "../../Hooks/useAllUsers";
// import useOrders from "../../Hooks/useOrders";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query"; // Import useQueryClient

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  const { users } = useAllUsers();

  console.log(users);
  // const { orderProduct } = useOrders();

  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleNameClick = (user) => {
    setSelectedUser(user);
    console.log(user);
    setShowModal(true);
  };

  const toggleAdmin = async (_id, isAdmin) => {
    try {
      // Send PATCH request
      await axiosPublic.patch(`/users/${_id}`, { isAdmin: !isAdmin });

      queryClient.invalidateQueries("users");
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: `User status updated successfully.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error toggling admin status:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="px-5">
        <h1 className="text-4xl font-bold text-center text-black py-5">
          All Users
        </h1>

        <div className="overflow-x-auto rounded-lg text-black">
          <table>
            <thead className="bg-gray-700">
              <tr className="text-orange-500 border text-sm md:text-md lg:text-lg">
                <th className="text-center">No</th>
                <th className="text-center ">Username</th>
                <th className="text-center">Profile Image</th>
                <th className="text-center">Email</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="font-medium">
              {users?.map((user, i) => (
                <tr key={user._id} className="bg-gray-400 text-sm md:text-md">
                  <td className="text-center">{i + 1}</td>
                  <td
                    onClick={() => handleNameClick(user)}
                    className="cursor-pointer text-center font-bold"
                  >
                    {user?.fullName}
                  </td>
                  <td className="text-center">
                    <img
                      className="w-16 h-16 md:h-20 md:w-20 rounded-full mx-auto text-center border-[3px] border-gray-200"
                      src={user?.profilePhoto}
                      alt={user?.fullName?.slice(0, 5)}
                    />
                  </td>
                  <td className="text-center">{user?.email}</td>
                  <td className="text-center">
                    <button
                      className="bg-orange-400 px-3 py-2 rounded-xl text-black"
                      onClick={() => toggleAdmin(user._id, user.isAdmin)}
                    >
                      {user.isAdmin ? "Make User" : "Make Admin"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="lg:w-4/12 mx-auto bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white">
              User Profile: {selectedUser?.username}
            </h2>
            <p>User ID: {selectedUser?._id}</p>
            <p>Email: {selectedUser?.email}</p>
            <h3 className="text-lg font-semibold text-white mt-4">
              Order History
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full mt-2">
                <thead>
                  <tr className="text-[#FF9D00]">
                    <th className="border bg-gray-800 border-gray-400 text-sm md:text-md lg:text-lg py-3">
                      Order ID
                    </th>
                    <th className="border bg-gray-800 border-gray-400 text-sm md:text-md lg:text-lg py-3">
                      Product Name
                    </th>
                    <th className="border border-gray-400 text-sm md:text-md lg:text-lg p-2">
                      Quantity
                    </th>
                    <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {selectedUser.orders.map((order) => (
                    <tr key={order.orderId}>
                      <td className="border bg-gray-800 border-gray-400 p-2 text-center">
                        {order.orderId}
                      </td>
                      <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md text-center">
                        {order.productName}
                      </td>
                      <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md text-center">
                        {order.quantity}
                      </td>
                      <td className="border bg-gray-800 border-gray-400 p-2 text-sm md:text-md text-center">
                        {order.totalPrice}
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 mt-4 mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
