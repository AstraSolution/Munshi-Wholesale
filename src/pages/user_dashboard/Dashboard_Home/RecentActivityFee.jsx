import React from 'react';

const RecentActivityFeed = () => {

 

  return (
    <div>
     <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
        <div className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md cursor-pointer transition-colors duration-300">
          <p className="text-gray-800 font-medium">Start a new order</p>
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md cursor-pointer transition-colors duration-300">
          <p className="text-gray-800 font-medium">View order history</p>
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md cursor-pointer transition-colors duration-300">
          <p className="text-gray-800 font-medium">Access the shopping cart</p>
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md cursor-pointer transition-colors duration-300">
          <p className="text-gray-800 font-medium">Manage wishlist</p>
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md cursor-pointer transition-colors duration-300">
          <p className="text-gray-800 font-medium">Update profile information</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RecentActivityFeed;