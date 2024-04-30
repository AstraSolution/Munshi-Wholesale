import React from 'react';
import { CiCamera } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";



const Profile_Update_Page = () => {


    return (
        <div>
            
            <div className='lg:flex lg:gap-2 container mx-auto px-1'>
                {/* left side  */}
                <div className='lg:w-4/12 w-full  '>
                    <div>
                        <div className=" mt-2 lg:min-h-screen bg-gray-800 shadow-xl rounded-lg text-gray-900">
                            {/* cover photo  */}
                            <div className="relative rounded-t-lg h-32 overflow-hidden">
                                <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
                                {/* Edit icon */}

                                <CiCamera className="absolute bottom-1 right-2 w-8 h-8 text-white fill-current bg-black rounded-full p-1 cursor-pointer hover:bg-gray-900"></CiCamera>

                            </div>
                            {/* Profile image */}
                            <div className="mx-auto  w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                                {/* Edit icon */}
                                <CiCamera className="absolute bottom-20 z-10 right-0 w-6 h-6 text-white fill-current bg-black rounded-full  cursor-pointer hover:bg-gray-900"></CiCamera>

                            </div>

                            <div className="mb-4 pt-2 px-1">
                                <label className="block md:text-xl  text-white  text-sm font-bold mb-2" htmlFor="title">
                                    Profession
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                                    id="profession"
                                    type="text"
                                    placeholder="Profession"
                                    required
                                />
                            </div>

                            <div className="mb-4 px-1 ">
                                <label className="block md:text-2xl text-white  text-sm font-bold mb-2" htmlFor="description">
                                    Bio
                                </label>
                                <textarea
                                    className="w-full h-auto md:min-h-60 min-h-32   px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 "
                                    id="bio"
                                    placeholder="Bio"
                                    required

                                />
                            </div>



                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div className='lg:w-8/12 w-full mx-auto mt-3 lg:mt-0 '>
                    <div>
                        <div className='flex items-center justify-between  '>
                            <h1 > Edit Now Information </h1>
                            <CiEdit className='text-3xl cursor-pointer '></CiEdit>
                        </div>
                        <div className='border-b-2 border-gray-600 pt-2 '></div>


                        <div className='my-2 '>
                            <div className="mb-4 pt-2 ">
                                <label className="block md:text-xl  text-white  text-sm font-bold mb-2" htmlFor="title">
                                    Full Name
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                                    id="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>

                            <div className="mb-4 pt-2 ">
                                <label className="block md:text-xl  text-white  text-sm font-bold mb-2" htmlFor="title">
                                    Phone Number
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>


                            <div className="mb-4 pt-2 ">
                                <label className="block md:text-xl  text-white  text-sm font-bold mb-2" htmlFor="title">
                                    Post Code
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                                    id="postCode"
                                    type="text"
                                    placeholder="Post Code"
                                    required
                                />
                            </div>


                            <div className="mb-4 pt-2 ">
                                <label className="block md:text-xl  text-white  text-sm font-bold mb-2" htmlFor="title">
                                    State
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                                    id="state"
                                    type="text"
                                    placeholder="State"
                                    required
                                />
                            </div>

                            <div className="mb-4 pt-2 ">
                                <label className="block md:text-xl  text-white  text-sm font-bold mb-2" htmlFor="title">
                                    District
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                                    id="district"
                                    type="text"
                                    placeholder="District"
                                    required
                                />
                            </div>

                            <div className="mb-4 pt-2 ">
                                <label className="block md:text-xl  text-white  text-sm font-bold mb-2" htmlFor="title">
                                    Country
                                </label>
                                <input
                                    className="w-full px-4 py-2 text-white border rounded-lg bg-gray-800  focus:outline-none focus:border-blue-500"
                                    id="country"
                                    type="text"
                                    placeholder="Country"
                                    required
                                />
                            </div>



                            <div className="p-4  mx-8 mt-2">
                                <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Save Now </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile_Update_Page;