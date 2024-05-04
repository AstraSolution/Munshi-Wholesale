import React, { useState } from 'react';
import { CiCamera, CiEdit } from "react-icons/ci";
import { useForm } from "react-hook-form";
import useImageURL from '../../Components/HomeComonents/ImageURL/useImageURL';

const Profile_Page = () => {

    const { register, handleSubmit } = useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedProfession, setSelectedProfession] = useState('');
    const [customProfession, setCustomProfession] = useState('');

    const [selectedCoverFile, setSelectedCoverFile] = useState();
    const { imageUrl: coverImageUrl, uploadImage: uploadCoverImage } = useImageURL(selectedCoverFile);
    const [coverPreview, setCoverPreview] = useState();

    const [selectedProfileFile, setSelectedProfileFile] = useState();
    const { imageUrl: profileImageUrl, uploadImage: uploadProfileImage } = useImageURL(selectedProfileFile);
    const [profilePreview, setProfilePreview] = useState();

    // Toggle editing mode
    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    // Handle profession change
    const handleProfessionChange = (value) => {
        setSelectedProfession(value);
    };

    // Handle form submission
    const onSubmit = async (data) => {
        const uploadedCoverImageUrl = await uploadCoverImage();
        const uploadedProfileImageUrl = await uploadProfileImage();

        const { birthday, phoneNumber, country, state, postCode, fullName, district, gender } = data || {};
        const updateUser = {
            birthday,
            phoneNumber,
            country, state, postCode, fullName, district,
            gender,
            coverPhoto: uploadedCoverImageUrl,
            profilePhoto: uploadedCoverImageUrl,
        };

        console.log(data);

        // Your form submission logic here
        console.log(updateUser);
    };

    // Functions to handle file selection and preview for cover photo
    const onSelectCoverFile = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) {
            setSelectedCoverFile(undefined);
            setCoverPreview(undefined);
            return;
        }

        const selectedImage = files[0];
        setSelectedCoverFile(selectedImage);

        const objectUrl = URL.createObjectURL(selectedImage);
        setCoverPreview(objectUrl);
    };

    // Functions to handle file selection and preview for profile photo
    const onSelectProfileFile = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) {
            setSelectedProfileFile(undefined);
            setProfilePreview(undefined);
            return;
        }

        const selectedImage = files[0];
        setSelectedProfileFile(selectedImage);

        const objectUrl = URL.createObjectURL(selectedImage);
        setProfilePreview(objectUrl);
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
                                {isEditing ? (
                                    <img className="object-cover object-top w-full" src={coverPreview ? coverPreview : "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"} alt="" />
                                ) : (
                                    <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
                                )}

                                <input
                                    type="file"
                                    id="coverFileInput"
                                    {...register("image")}
                                    hidden
                                    onChange={onSelectCoverFile}
                                />
                                {isEditing && (
                                    <CiCamera
                                        onClick={() => {
                                            document.getElementById("coverFileInput").click();
                                        }}
                                        className="absolute bottom-1 right-2 w-8 h-8 text-gray-300 fill-current bg-black rounded-full p-1 cursor-pointer hover:bg-gray-900"
                                    />
                                )}
                            </div>


                            {/* Profile image */}
                            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                {isEditing ? (
                                    <img className="object-cover object-top w-full" src={profilePreview ? profilePreview : 'https://i.ibb.co/5jQYxLn/about1.jpg'} alt="" />
                                ) : (
                                    <img className="object-cover object-center h-32" src='https://i.ibb.co/5jQYxLn/about1.jpg' alt='Woman looking front' />
                                )}
                                <input
                                    type="file"
                                    id="profileFileInput"
                                    {...register("profilePhoto")}
                                    hidden
                                    onChange={onSelectProfileFile}
                                />
                                {isEditing && (
                                    <CiCamera
                                        onClick={() => {
                                            document.getElementById("profileFileInput").click();
                                        }}
                                        className="absolute bottom-4 right-0 w-6 h-6 text-gray-300 fill-current bg-black rounded-full p-1 cursor-pointer hover:bg-gray-900"
                                    />
                                )}
                            </div>





                            <div className="text-center mt-2 text-gray-200 ">
                                <h2 className="font-semibold">Siyam Ahmed</h2>
                                
                                {isEditing ? (
                                    ""
                                ) : (
                                    <p className="">Email</p>
                                )}
                                {isEditing ? (
                                    <div className="mb-2 mt-8 px-4 ">
                                        <label className="block md:text-xl text-left text-gray-300  text-sm font-bold mb-2" htmlFor="title">
                                            Profession
                                        </label>
                                        <select
                                            className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
                                            onChange={(e) => handleProfessionChange(e.target.value)}
                                        >
                                            <option value=''>Select profession</option>
                                            <option value='student'>Student</option>
                                            <option value='business'>Business</option>
                                            <option value='electrician'>Electrician</option>
                                            <option value='doctor'>Doctor</option>
                                            <option value='teacher'>Teacher</option>
                                            <option value='socialWorker'>Social Worker</option>
                                            <option value='mechanicalEngineer'>Mechanical Engineer</option>
                                            <option value='iTTechnician'>IT Technician</option>
                                            <option value='others'>Others</option>
                                        </select>
                                        {selectedProfession === 'others' && (
                                            <input
                                                type="text"
                                                placeholder="Enter your profession"
                                                className="w-full px-4 py-3 mt-2 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C] focus:outline-none focus:border-blue-500"
                                                value={customProfession}
                                                onChange={(e) => setCustomProfession(e.target.value)}
                                            />
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-gray-200">Freelance Web Designer</p>
                                )}
                            </div>
                            <div className='px-4 py-2'>
                                <h1> Bio </h1>
                                {isEditing ? (
                                    <textarea
                                        className="w-full h-auto md:min-h-60 min-h-32 border-gray-600 px-4 py-2 text-gray-300 border rounded-lg bg-[#1A222C] focus:outline-none focus:border-blue-500 "
                                        id="bio"
                                        placeholder="Bio"
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


                                {
                                    isEditing ? (
                                        <div className='my-2'>
                                            <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
                                                Gender
                                            </label>

                                            <div className="flex items-center mb-4">
                                                <input defaultChecked
                                                    type="radio"
                                                    id="male"
                                                    value="male"
                                                    {...register("gender")}
                                                    name="gender"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-00 dark:text-gray-300">Male</label>
                                            </div>
                                            <div className="flex items-center ">
                                                <input
                                                    type="radio"
                                                    id="female"
                                                    value="female"
                                                    {...register("gender")}
                                                    name="gender"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-300 dark:text-gray-300">Female</label>
                                            </div>

                                        </div>
                                    ) : (
                                        <div>
                                            <h1 className='py-2'>Gender</h1>
                                            <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'> Male </h3>
                                        </div>
                                    )
                                }





                                <div className='my-2 '>

                                    {
                                        isEditing ? (
                                            <div>
                                                <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
                                                    Date Of Birth
                                                </label>

                                                <div className="relative ">
                                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gray-300 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                        </svg>
                                                    </div>
                                                    <input type="date" {...register("birthday")} required name="birthday" className="border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500 text-sm  block w-full ps-10 p-2.5  dark:focus:border-blue-500" placeholder="Select your birthday date" />
                                                </div>
                                            </div>
                                        ) :
                                            (
                                                <div>
                                                    <h1 className='py-2'>Date Of Birth</h1>
                                                    <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'> 05-june-2002 </h3>
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
