import useOrders from "../../../Hooks/useOrders";
import { useState } from "react";

export default function RecentOrders() {
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
    <>
      <div className="bg-white rounded-md shadow-md p-6">
        <div className="">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          {myOrders?.slice(0, visibleItems).map((item) => (
            <div
              key={item._id}
              className="divide-y divide-gray-200 flex items-center justify-between px-2"
            >
              <p className="">{item?.title}</p>
              <p className="py-2"> ${item?.unit_price}</p>
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
      </div>
    </>
  );
}