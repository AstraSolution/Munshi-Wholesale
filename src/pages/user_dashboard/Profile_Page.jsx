import React, { useState } from 'react';
import { CiCamera, CiEdit } from "react-icons/ci";
import { useForm } from "react-hook-form";

const Profile_Page = () => {

    const { register, handleSubmit } = useForm();
    // State to manage editing mode
    const [isEditing, setIsEditing] = useState(false);

    // Toggle editing mode
    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <>
            {/* Profile */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='lg:flex lg:gap-4 container mx-auto px-1'>
                    {/* Left side */}
                    <div className='lg:w-4/12 w-full '>
                        <div className="mt-1 lg:mt-3 lg:min-h-screen bg-gray-800 shadow-xl rounded-lg text-gray-300 ">
                            {/* Cover photo */}
                            <div className="relative rounded-t-lg h-32 overflow-hidden">
                                <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
                                {/* Edit icon */}
                                <CiCamera className="absolute bottom-1 right-2 w-8 h-8 text-gray-300 fill-current bg-black rounded-full p-1 cursor-pointer hover:bg-gray-900" />
                            </div>
                            {/* Profile image */}
                            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                <img className="object-cover object-center h-32" src='https://i.ibb.co/5jQYxLn/about1.jpg' alt='Woman looking front' />
                                {/* Edit icon */}
                                {/* <CiCamera className="absolute bottom-4 right-0 w-6 h-6 text-gray-300 fill-current bg-black rounded-full p-1 cursor-pointer hover:bg-gray-900"></CiCamera> */}
                            </div>
                            <div className="text-center mt-2 text-gray-200 ">
                                <h2 className="font-semibold">Siyam Ahmed</h2>
                                <p className="">Email</p>
                                <p className="">Freelance Web Designer</p>
                            </div>

                            
                            <div className='px-5 py-4'>
                                <h1> Bio </h1>
                                {isEditing ? (
                                    <textarea
                                        className="w-full h-auto md:min-h-60 min-h-32 border-gray-600 px-4 py-2 text-gray-300 border rounded-lg bg-[#1A222C] focus:outline-none focus:border-blue-500 "
                                        id="bio"
                                        placeholder="Bio"
                                        required

                                    />
                                ) : (
                                    <p className='text-sm md:text-lg lg:text-lg text-gray-200'>I am Siyam Ahmed. A problem solver who demonstrates skills like critical thinking, analytical reasoning, creativity, and persistence. They excel at identifying, analyzing, and solving complex problems using systematic approaches. This involves breaking down problems, generating solutions, evaluating alternatives, and implementing effective strategies. Effective communication and collaboration skills are also crucial for working in teams and conveying solutions clearly</p>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='lg:w-8/12 w-full mx-auto mt-3 lg:mt-3 bg-gray-800 p-6 rounded-md '>
                        <div>
                            <div className='flex items-center justify-between text-gray-300'>
                                <h1>Personal Information</h1>
                                {/* Edit Button */}
                                <button onClick={toggleEditing}><CiEdit className='text-3xl cursor-pointer' /></button>
                            </div>
                            <div className='border-b-2 border-gray-600 pt-2'></div>
                            <div className='my-2'>
                                <div>

                                    {
                                        isEditing ? (
                                            <div className="mb-4 pt-2 ">
                                                <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
                                                    Full Name
                                                </label>
                                                <input
                                                    className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
                                                    id="fullName"
                                                    type="text"
                                                    placeholder="Full Name"
                                                    {...register("fullName")}
                                                    required
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <h1 className='py-2'>Name :-</h1>
                                                <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>Full Name</h3>
                                            </div>
                                        )
                                    }

                                </div>
                                <div className='my-2'>

                                    {
                                        isEditing ? (
                                            <div className="mb-4 pt-2 ">
                                                <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
                                                    Phone Number
                                                </label>
                                                <input
                                                    className="w-full px-4 py-3 text-gray-300 border border-gray-600 rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
                                                    id="phoneNumber"
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    {...register("phoneNumber")}
                                                    required
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <h1 className='py-2'>Phone Number :-</h1>
                                                <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>Phone Number</h3>
                                            </div>
                                        )
                                    }

                                </div>

                                <div className='my-2'>

                                    {
                                        isEditing ? (
                                            <div className="mb-4 pt-2 ">
                                                <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
                                                    Post Code
                                                </label>
                                                <input
                                                    className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
                                                    id="postCode"
                                                    type="text"
                                                    placeholder="Post Code"
                                                    {...register("postCode")}
                                                    required
                                                />
                                            </div>


                                        ) : (
                                            <div>
                                                <h1 className='py-2'>Post Code :-</h1>
                                                <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>Post Code</h3>
                                            </div>


                                        )
                                    }


                                </div>
                                <div className='my-2'>
                                    {
                                        isEditing ? (
                                            <div className="mb-4 pt-2 ">
                                                <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
                                                    State
                                                </label>
                                                <input
                                                    className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
                                                    id="state"
                                                    type="text"
                                                    placeholder="State"
                                                    {...register("state")}
                                                    required
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <h1 className='py-2'>State :-</h1>
                                                <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>State</h3>
                                            </div>


                                        )
                                    }
                                </div>
                                <div className='my-2'>
                                    {
                                        isEditing ? (

                                            <div className="mb-4 pt-2 ">
                                                <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
                                                    District
                                                </label>
                                                <input
                                                    className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
                                                    id="district"
                                                    type="text"
                                                    placeholder="District"
                                                    {...register("district")}
                                                    required
                                                />
                                            </div>

                                        ) : (
                                            <div>
                                                <h1 className='py-2'>District :-</h1>
                                                <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>District</h3>
                                            </div>


                                        )
                                    }

                                </div>
                                <div className='my-2'>
                                    {
                                        isEditing ? (

                                            <div className="mb-4 pt-2 ">
                                                <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
                                                    Country
                                                </label>
                                                <input
                                                    className="w-full px-4 py-3  border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
                                                    id="country"
                                                    type="text"
                                                    placeholder="Country"
                                                    {...register("country")}
                                                    required
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <h1 className='py-2'>Country :-</h1>
                                                <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>Country</h3>
                                            </div>


                                        )
                                    }

                                </div>
                                <div className="p-4  mx-8 mt-2">
                                    {
                                        isEditing ? (
                                            <button className="w-1/2 block mx-auto rounded-full bg-[#1A222C] hover:shadow-lg font-semibold text-gray-300 px-6 py-2">Save Now </button>

                                        ) : ("")
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </form>
        </>
    );
};

export default Profile_Page;
