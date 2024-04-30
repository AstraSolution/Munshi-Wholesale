import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

import { Link } from 'react-router-dom';

const My_Order_Page = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/products.json')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
  
console.log(data);

//   if (isLoading) {

//     return (
//       < div className='text-center flex items-center justify-center min-h-screen'>
//         <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
//           <svg class="md:h-16 h-10 md:w-20 w-16 animate-spin stroke-gray-500" viewBox="0 0 256 256">
//             <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
//             <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
//               stroke-width="24"></line>
//             <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
//             </line>
//             <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
//               stroke-width="24"></line>
//             <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
//             </line>
//             <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
//               stroke-width="24"></line>
//             <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
//             <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
//             </line>
//           </svg>
//           <span class="lg:text-4xl md:text-xl text-lg font-medium text-gray-500">Loading...</span>
//         </div>
//       </div >
//     )
//   }

  return (
    <div className="container mx-auto md:py-3  py-2 text-white ">
      <div className="space-y-2">
        <div className=" p-5 rounded-lg bg-50-50">
          <div className='flex items-center justify-between'>
            <h1 className="text-2xl font-bold pb-1 font-oswald ">My Order </h1>
            <div className='flex items-center justify-between md:gap-6 gap-2 '>
              <div className='relative w-full'>
                <input
                  type='text'
                  id='search'
                  className='bg-gray-800 border  text-white text-sm rounded-lg ffocus:outline-none focus:border-blue-500 block w-full  py-2  px-2   dark:text-white'
                  placeholder='Search...'
                />
                <button type='button' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                  <IoIosSearch size={23} className='min-w-max' />
                </button>
              </div>
              <div className='py-2 px-1 md:w-44'>
                <select
                  className=' w-full px-4 py-1 md:py-1.5  text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 font-oswald '>
                  <option value='all'>All</option>
                  <option value='burger'> Burger </option>
                  <option value='snack'> Snack </option>
                  <option className='pb-2' value='beverage'>Beverage</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full mt-2">
              <tr className='text-[#FF9D00]  '>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">N/A</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">Title Nme</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg p-2">product Image</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">Category</th>
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">Status</th>
            
                <th className="border border-gray-400 text-sm md:text-md lg:text-lg py-3">Action</th>
              </tr>
              {
                data?.map((product, i) => <tr key={product._id}>
                  <td className="border border-gray-400 p-2 text-center ">{i + 1} </td>
                  <td className="border border-gray-400 md:p-2 p-1  text-sm  ">
                    {
                      product?.title?.slice(0, 30)
                    }.....
                  </td>
                  <td className="border border-gray-400 p-2">
                    <img className='w-20 md:h-16 rounded-lg  mx-auto ' src={product?.image[0]} alt="" />
                  </td>
                  <td className="border border-gray-400 p-2 text-sm md:text-md   text-center  "> {product?.category} </td>
                  <td className="border border-gray-400 p-2 text-sm md:text-md  text-center "> Pending</td>
               
               

                  <td className=" flex items-center justify-center gap-3 md:py-6 py-4 border border-gray-400 p-2">
                  
                    <Link > <span className="p-2 w-fit  text-white cursor-pointer text-sm rounded-md">
                      {/* <CiEdit size={30}></CiEdit> */}
                      cancel
                    </span>
                    </Link>
                    <span  className="md:p-2 p-3 cursor-pointer w-fit text-white text-sm rounded-md">
                      {/* <MdDelete className='text-red-500 ' size={30}></MdDelete> */}
                      Delete
                    </span>
                  </td>
                </tr>)
              }

            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default My_Order_Page;