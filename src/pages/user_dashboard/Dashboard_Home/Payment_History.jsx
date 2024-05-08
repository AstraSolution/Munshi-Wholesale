import React from 'react';

const Payment_History = () => {
    return (
        <div>
            <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Order History */}
                <div className="bg-white rounded-md shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Payment History</h2>
                    <ul className="divide-y divide-gray-200">
                        {/* Placeholder for order history */}
                        <li className="py-2">Payment 1</li>
                        <li className="py-2">Payment 2</li>
                        <li className="py-2">Payment 3</li>
                    </ul>
                </div>

                {/* Account Information */}
                <div className="bg-white rounded-md shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Account Information</h2>
                    <ul className="divide-y divide-gray-200">
                        {/* Placeholder for account information */}
                        <li className="py-2">Name: John Doe</li>
                        <li className="py-2">Email: john@example.com</li>
                        <li className="py-2">Address: 123 Main St, City</li>
                    </ul>
                </div>

                {/* Recommended Products */}
                <div className="bg-white rounded-md shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Recommended Products</h2>
                    <ul className="divide-y divide-gray-200">
                        {/* Placeholder for recommended products */}
                        <li className="py-2">Product 1</li>
                        <li className="py-2">Product 2</li>
                        <li className="py-2">Product 3</li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Payment_History;