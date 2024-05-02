import  { useState } from "react";

const AllUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleReviewClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // Assuming your user data is defined here
  const [userData, setUserData] = useState([
    {
      _id: 1,
      username: "JohnDoe",
      email: "john@example.com",
      role: "user",
      orders: [
        { orderId: 101, productName: "Product A", quantity: 2, totalPrice: 20 },
        { orderId: 102, productName: "Product B", quantity: 1, totalPrice: 10 },
      ],
    },
    {
      _id: 2,
      username: "JaneDoe2",
      email: "jane@example.com",
      role: "user",
      orders: [
        { orderId: 201, productName: "Product C", quantity: 3, totalPrice: 30 },
        { orderId: 202, productName: "Product D", quantity: 1, totalPrice: 15 },
      ],
    },
  ]);

  const toggleBan = (userId) => {
    setUserData((prevUserData) =>
      prevUserData.map((user) =>
        user._id === userId ? { ...user, isBanned: !user.isBanned } : user
      )
    );
  };

  const toggleAdmin = (userId) => {
    setUserData((prevUserData) =>
      prevUserData.map((user) =>
        user._id === userId ? { ...user, isAdmin: !user.isAdmin } : user
      )
    );
  };

  return (
    <div className="container mx-auto md:py-3 py-2 text-white">
      <div className="space-y-2">
        <div className="p-5 rounded-lg bg-50-50">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold pb-1 font-oswald">All Users</h1>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full mt-2">
              <thead>
                <tr className="text-[#FF9D00]">
                  <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">
                    N/A
                  </th>
                  <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">
                    Username
                  </th>
                  <th className="border border-gray-400 text-sm md:text-md lg:text-lg p-2">
                    Profile Image
                  </th>
                  <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">
                    Email
                  </th>
                  <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData?.map((user, i) => (
                  <tr key={user._id}>
                    <td className="border border-gray-400 p-2 text-center ">
                      {i + 1}
                    </td>
                    <td
                      onClick={() => handleReviewClick(user)}
                      className="border cursor-pointer border-gray-400 text-white p-2 text-sm md:text-md text-center"
                    >
                      {user?.username}
                    </td>
                    <td className="border border-gray-400 p-2">
                      {/* Assuming you have profile images for users */}
                      <img
                        className="w-20 md:h-16 rounded-lg mx-auto"
                        src={`https://via.placeholder.com/150?text=${user.username}`}
                        alt={`Profile of ${user?.username}`}
                      />
                    </td>
                    <td className="border border-gray-400 p-2 text-sm md:text-md text-center ">
                      {user?.email}
                    </td>
                    <td className="border border-gray-400 p-2 text-sm md:text-md text-center">
                      <button
                        className="p-3 mr-2 rounded-2xl bg-neutral-900"
                        onClick={() => toggleBan(user._id)}
                      >
                        {user.isBanned ? "UnBan" : "Ban"}
                      </button>
                      <button
                        className="p-3 rounded-2xl bg-neutral-900"
                        onClick={() => toggleAdmin(user._id)}
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
      </div>

      {showModal && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="lg:w-4/12 mx-auto bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white">User Profile: {selectedUser.username}</h2>
            <p>User ID: {selectedUser._id}</p>
            <p>Email: {selectedUser.email}</p>
            <h3 className="text-lg font-semibold text-white mt-4">Order History</h3>
            <div className="overflow-x-auto">
              <table className="w-full mt-2">
                <thead>
                  <tr className="text-[#FF9D00]">
                    <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">
                      Order ID
                    </th>
                    <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">
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
                  {selectedUser.orders.map((order) => (
                    <tr key={order.orderId}>
                      <td className="border border-gray-400 p-2 text-center">
                        {order.orderId}
                      </td>
                      <td className="border border-gray-400 p-2 text-sm md:text-md text-center">
                        {order.productName}
                      </td>
                      <td className="border border-gray-400 p-2 text-sm md:text-md text-center">
                        {order.quantity}
                      </td>
                      <td className="border border-gray-400 p-2 text-sm md:text-md text-center">
                        {order.totalPrice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 mt-4"
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
