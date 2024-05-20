import { useState } from "react";
import RecentOrders from "./RecentOrders";
import useOrders from "../../../Hooks/useOrders";

const Payment_History = () => {
  const { myOrders } = useOrders();

  const [visibleItems, setVisibleItems] = useState(3);

  const handleSeeMore = () => {
    if (myOrders) {
      setVisibleItems(myOrders.length);
    }
  };

  const handleSeeLess = () => {
    setVisibleItems(3);
  };

  return (
    <div>
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Order History */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Payment History</h2>
          {myOrders?.slice(0, visibleItems).map((item) => (
            <div
              key={item._id}
              className="divide-y divide-gray-200 flex items-center justify-between px-2"
            >
              <p className="">Transaction Id: {item?.tranjectionId}</p>
              <p className="py-2">Payment: Paid</p>
            </div>
          ))}
          {myOrders && myOrders.length > 3 && (
            <div className="flex justify-center mt-4">
              {visibleItems === 3 ? (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={handleSeeMore}
                >
                  See More
                </button>
              ) : (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={handleSeeLess}
                >
                  See Less
                </button>
              )}
            </div>
          )}
        </div>

        {/* Recommended Products */}
        <RecentOrders />
      </div>
    </div>
  );
};

export default Payment_History;
