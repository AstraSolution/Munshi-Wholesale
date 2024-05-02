import  { useEffect, useState } from 'react';

import { IoIosSearch } from "react-icons/io";


const AllOrders = () => {

    
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/products.json')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
  
console.log(data);
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
                    <td className="border border-gray-400 p-2 text-sm md:text-md  text-center "> Shipped</td>
                 
                 
  
                    
                  </tr>)
                }
  
              </table>
            </div>
          </div>
  
        </div>
      </div>
    );
};

export default AllOrders;