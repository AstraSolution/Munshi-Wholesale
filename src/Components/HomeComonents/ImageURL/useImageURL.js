import { useState } from "react";
import axios from "axios";


// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=a7c623941e0f93c1a6b379243e2ca35f`;

const useImageURL = (imageFile) => {
  const [imageUrl, setImageUrl] = useState(null);
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = response?.data?.data?.display_url || "";
      setImageUrl(imageUrl);

      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      
    }
  };


  return { imageUrl, uploadImage };
};

export default useImageURL;




// import React, { useState } from 'react';
// import { CiCamera, CiEdit } from "react-icons/ci";
// import { useForm } from "react-hook-form";
// import useImageURL from '../../Components/HomeComonents/ImageURL/useImageURL';

// const Profile_Page = () => {

//     const { register, handleSubmit } = useForm();
//     const [isEditing, setIsEditing] = useState(false);
//     const [selectedProfession, setSelectedProfession] = useState('');
//     const [customProfession, setCustomProfession] = useState('');
//     const [selectedFile, setSelectedFile] = useState();
//     const { imageUrl, uploadImage } = useImageURL(selectedFile);
//     const [preview, setPreview] = useState();

//     // Toggle editing mode
//     const toggleEditing = () => {
//         setIsEditing(!isEditing);
//     };

//     // Handle profession change
//     const handleProfessionChange = (value) => {
//         setSelectedProfession(value);
//     };

//     // Handle form submission
//     const onSubmit = async (data) => {
//         const uploadedImageUrl = await uploadImage();

//         if (selectedFile) {
//             const uploadedImageUrl = await uploadImage();
//             data.image = uploadedImageUrl;
//         }


//         data.profession = selectedProfession === 'others' ? customProfession : selectedProfession;
//         console.log(data);

//         const { country, district, fullName, phoneNumber, postCode, profession, state, } = data || {};
//         const updateUser = {
//             country, district, fullName, phoneNumber, postCode, profession, state, profession,
//             coverPhoto: uploadedImageUrl,
//         };
//         console.log(updateUser);
//     };


//     // image change function 

//     const onSelectFile = (e) => {
//         const files = e.target.files;

//         if (!files || files.length === 0) {
//             setSelectedFile(undefined);
//             setPreview(undefined);
//             return;
//         }

//         const selectedImage = files[0];
//         setSelectedFile(selectedImage);

//         const objectUrl = URL.createObjectURL(selectedImage);
//         setPreview(objectUrl);
//     };

//     return (
//         <>
//             {/* Profile */}
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className='lg:flex lg:gap-4 container mx-auto px-1'>
//                     {/* Left side */}
//                     <div className='lg:w-4/12 w-full '>
//                         <div className="mt-1 lg:mt-3 lg:min-h-screen bg-gray-800 shadow-xl rounded-lg text-gray-300 ">
//                             {/* Cover photo */}

//                             {
//                                 isEditing ? (
//                                     <div className="relative rounded-t-lg h-32 overflow-hidden">
//                                         {preview ? (
//                                             <img className="object-cover object-top w-full" src={preview} alt="" />
//                                         ) : (
//                                             <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
//                                         )}
//                                         {/* image Edit icon */}

//                                         <input
//                                             type="file"
//                                             id="fileInput"
//                                             {...register("image")}
//                                             hidden
//                                             onChange={onSelectFile}
//                                         />
//                                         <CiCamera
//                                             onClick={() => {
//                                                 document.getElementById("fileInput").click();
//                                             }}
//                                             className="absolute bottom-1 right-2 w-8 h-8 text-gray-300 fill-current bg-black rounded-full p-1 cursor-pointer hover:bg-gray-900" />
//                                     </div>
//                                 ) : (
//                                     <div className="relative rounded-t-lg h-32 overflow-hidden">
//                                         <img className="object-cover object-top w-full" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
//                                     </div>)
//                             }


//                             {/* Profile image */}

//                             {
//                                 isEditing ? (
//                                     <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
//                                         {preview ? (
//                                             <img className="object-cover object-top w-full" src={preview} alt="" />
//                                         ) : (
//                                             <img className="object-cover object-center h-32" src='https://i.ibb.co/5jQYxLn/about1.jpg' alt='Woman looking front' />
//                                         )}
//                                         {/* image Edit icon */}

//                                         <input
//                                             type="file"
//                                             id="fileInput"
//                                             {...register("image")}
//                                             hidden
//                                             onChange={onSelectFile}
//                                         />
//                                         <CiCamera
//                                             onClick={() => {
//                                                 document.getElementById("fileInput").click();
//                                             }}
//                                             className="absolute bottom-4 right-0 w-6 h-6 text-gray-300 fill-current bg-black rounded-full p-1 cursor-pointer hover:bg-gray-900"></CiCamera>
//                                     </div>
//                                 ) : (
//                                     <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
//                                         <img className="object-cover object-center h-32" src='https://i.ibb.co/5jQYxLn/about1.jpg' alt='Woman looking front' />

//                                     </div>
//                                 )
//                             }





//                             <div className="text-center mt-2 text-gray-200 ">
//                                 <h2 className="font-semibold">Siyam Ahmed</h2>

//                                 {
//                                     isEditing ? (
//                                         ""
//                                     ) : (
//                                         <p className="">Email</p>
//                                     )
//                                 }

//                                 {
//                                     isEditing ? (
//                                         <div className="mb-2 mt-8 px-4 ">
//                                             <label className="block md:text-xl text-left text-gray-300  text-sm font-bold mb-2" htmlFor="title">
//                                                 Profession
//                                             </label>
//                                             <select
//                                                 className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
//                                                 onChange={(e) => handleProfessionChange(e.target.value)}
//                                             >
//                                                 <option value=''>Select profession</option>
//                                                 <option value='student'>Student</option>
//                                                 <option value='business'>Business</option>
//                                                 <option value='electrician'>Electrician</option>
//                                                 <option value='doctor'>Doctor</option>
//                                                 <option value='teacher'>Teacher</option>
//                                                 <option value='socialWorker'>Social Worker</option>
//                                                 <option value='mechanicalEngineer'>Mechanical Engineer</option>
//                                                 <option value='iTTechnician'>IT Technician</option>
//                                                 <option value='others'>Others</option>
//                                             </select>
//                                             {selectedProfession === 'others' && (
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Enter your profession"
//                                                     className="w-full px-4 py-3 mt-2 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C] focus:outline-none focus:border-blue-500"
//                                                     value={customProfession}
//                                                     onChange={(e) => setCustomProfession(e.target.value)}
//                                                 />
//                                             )}
//                                         </div>
//                                     ) : (
//                                         <p className="text-gray-200">Freelance Web Designer</p>
//                                     )
//                                 }
//                             </div>
//                             <div className='px-4 py-2'>
//                                 <h1> Bio </h1>
//                                 {isEditing ? (
//                                     <textarea
//                                         className="w-full h-auto md:min-h-60 min-h-32 border-gray-600 px-4 py-2 text-gray-300 border rounded-lg bg-[#1A222C] focus:outline-none focus:border-blue-500 "
//                                         id="bio"
//                                         placeholder="Bio"

//                                     />
//                                 ) : (
//                                     <p className='text-sm md:text-lg lg:text-lg text-gray-200'>I am Siyam Ahmed. A problem solver who demonstrates skills like critical thinking, analytical reasoning, creativity, and persistence. They excel at identifying, analyzing, and solving complex problems using systematic approaches. This involves breaking down problems, generating solutions, evaluating alternatives, and implementing effective strategies. Effective communication and collaboration skills are also crucial for working in teams and conveying solutions clearly</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     {/* Right side */}
//                     <div className='lg:w-8/12 w-full mx-auto mt-3 lg:mt-3 bg-gray-800 p-6 rounded-md '>
//                         <div>
//                             <div className='flex items-center justify-between text-gray-300'>
//                                 <h1>Personal Information</h1>
//                                 {/* Edit Button */}
//                                 <button onClick={toggleEditing}><CiEdit className='text-3xl cursor-pointer' /></button>
//                             </div>
//                             <div className='border-b-2 border-gray-600 pt-2'></div>
//                             <div className='my-2'>
//                                 <div>
//                                     {
//                                         isEditing ? (
//                                             <div className="mb-4 pt-2 ">
//                                                 <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
//                                                     Full Name
//                                                 </label>
//                                                 <input
//                                                     className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
//                                                     id="fullName"
//                                                     type="text"
//                                                     placeholder="Full Name"
//                                                     {...register("fullName")}
//                                                     required
//                                                 />
//                                             </div>
//                                         ) : (
//                                             <div>
//                                                 <h1 className='py-2'>Name :-</h1>
//                                                 <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>Full Name</h3>
//                                             </div>
//                                         )
//                                     }
//                                 </div>
//                                 <div className='my-2'>
//                                     {
//                                         isEditing ? (
//                                             <div className="mb-4 pt-2 ">
//                                                 <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
//                                                     Phone Number
//                                                 </label>
//                                                 <input
//                                                     className="w-full px-4 py-3 text-gray-300 border border-gray-600 rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
//                                                     id="phoneNumber"
//                                                     type="number"
//                                                     placeholder="Phone Number"
//                                                     {...register("phoneNumber")}
//                                                     required
//                                                 />
//                                             </div>
//                                         ) : (
//                                             <div>
//                                                 <h1 className='py-2'>Phone Number :-</h1>
//                                                 <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>Phone Number</h3>
//                                             </div>
//                                         )
//                                     }
//                                 </div>
//                                 <div className='my-2'>
//                                     {
//                                         isEditing ? (
//                                             <div className="mb-4 pt-2 ">
//                                                 <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
//                                                     Post Code
//                                                 </label>
//                                                 <input
//                                                     className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
//                                                     id="postCode"
//                                                     type="text"
//                                                     placeholder="Post Code"
//                                                     {...register("postCode")}
//                                                     required
//                                                 />
//                                             </div>
//                                         ) : (
//                                             <div>
//                                                 <h1 className='py-2'>Post Code :-</h1>
//                                                 <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>Post Code</h3>
//                                             </div>
//                                         )
//                                     }
//                                 </div>
//                                 <div className='my-2'>
//                                     {
//                                         isEditing ? (
//                                             <div className="mb-4 pt-2 ">
//                                                 <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
//                                                     State
//                                                 </label>
//                                                 <input
//                                                     className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
//                                                     id="state"
//                                                     type="text"
//                                                     placeholder="State"
//                                                     {...register("state")}
//                                                     required
//                                                 />
//                                             </div>
//                                         ) : (
//                                             <div>
//                                                 <h1 className='py-2'>State :-</h1>
//                                                 <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>State</h3>
//                                             </div>
//                                         )
//                                     }
//                                 </div>
//                                 <div className='my-2'>
//                                     {
//                                         isEditing ? (
//                                             <div className="mb-4 pt-2 ">
//                                                 <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
//                                                     District
//                                                 </label>
//                                                 <input
//                                                     className="w-full px-4 py-3 border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
//                                                     id="district"
//                                                     type="text"
//                                                     placeholder="District"
//                                                     {...register("district")}
//                                                     required
//                                                 />
//                                             </div>
//                                         ) : (
//                                             <div>
//                                                 <h1 className='py-2'>District :-</h1>
//                                                 <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>District</h3>
//                                             </div>
//                                         )
//                                     }
//                                 </div>
//                                 <div className='my-2'>
//                                     {
//                                         isEditing ? (
//                                             <div className="mb-4 pt-2 ">
//                                                 <label className="block md:text-xl  text-gray-300  text-sm font-bold mb-2" htmlFor="title">
//                                                     Country
//                                                 </label>
//                                                 <input
//                                                     className="w-full px-4 py-3  border-gray-600 text-gray-300 border rounded-md bg-[#1A222C]  focus:outline-none focus:border-blue-500"
//                                                     id="country"
//                                                     type="text"
//                                                     placeholder="Country"
//                                                     {...register("country")}
//                                                     required
//                                                 />
//                                             </div>
//                                         ) : (
//                                             <div>
//                                                 <h1 className='py-2'>Country :-</h1>
//                                                 <h3 className='border border-gray-600 rounded-md w-full py-1 px-2'>Country</h3>
//                                             </div>
//                                         )
//                                     }
//                                 </div>
//                                 <div className="p-4  mx-8 mt-2">
//                                     {
//                                         isEditing ? (
//                                             <button className="w-1/2 block mx-auto rounded-full bg-[#1A222C] hover:shadow-lg font-semibold text-gray-300 px-6 py-2">Save Now </button>
//                                         ) : ("")
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div >
//             </form>
//         </>
//     );
// };

// export default Profile_Page;
