// import React from 'react';
// import Requment_Product from './Requment_Product';
// import useOrders from '../../../Hooks/useOrders';

// const Payment_History = () => {
//     const [orderProduct] = useOrders()
//     const orderItems = orderProduct?.myOrders

//     console.log(orderItems);

//     return (
//         <div>
//             <div className=" py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

//                 {/* Order History */}
//                 <div className="bg-white rounded-md shadow-md p-6">
//                     <h2 className="text-lg font-semibold mb-4">Payment History</h2>
//                     {
//                         orderItems?.map(item => <div key={item._id} >
//                             <div className="divide-y divide-gray-200 flex items-center justify-between px-2 ">
//                                 <p>Tranjection Id {item?.tranjectionId}</p>
//                                 <p className="py-2">Payment : Paid</p>
                               
//                             </div>
                    


//                         </div>)
//                     }

//                 </div>

               
//                 {/* Recommended Products */}
//                 <Requment_Product></Requment_Product>


//             </div>
//         </div>
//     );
// };

// export default Payment_History;



import React, { useState } from 'react';
import Requment_Product from './Requment_Product';
import useOrders from '../../../Hooks/useOrders';

const Payment_History = () => {
    const [orderProduct] = useOrders();
    const orderItems = orderProduct?.myOrders;

    const [visibleItems, setVisibleItems] = useState(3);

    const handleSeeMore = () => {
        if (orderItems) {
            setVisibleItems(orderItems.length);
        }
    };

    const handleSeeLess = () => {
        setVisibleItems(3);
    };

    console.log(orderItems);

    return (
        <div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                {/* Order History */}
                <div className="bg-white rounded-md shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Payment History</h2>
                    {orderItems?.slice(0, visibleItems).map(item => (
                        <div key={item._id} className="divide-y divide-gray-200 flex items-center justify-between px-2">
                            <p className=''>Transaction Id: {item?.tranjectionId}</p>
                            <p className="py-2">Payment: Paid</p>
                        </div>
                    ))}
                    {orderItems && orderItems.length > 3 && (
                        <div className="flex justify-center mt-4">
                            {visibleItems === 3 ? (
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleSeeMore}>See More</button>
                            ) : (
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleSeeLess}>See Less</button>
                            )}
                        </div>
                    )}
                </div>

                {/* Recommended Products */}
                <Requment_Product />
            </div>
        </div>
    );
};

export default Payment_History;
