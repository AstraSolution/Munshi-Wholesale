

import React from "react";
import { useForm } from "react-hook-form";
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = React.useState([]);
  const [fileNames, setFileNames] = React.useState([]);

  const axiosPublic = useAxiosPublic();




  const handleImageChange = (files) => {
    const newImages = [...images];
    const newFileNames = [...fileNames];
    for (let i = 0; i < files.length; i++) {
      newImages.push(URL.createObjectURL(files[i]));
      newFileNames.push(files[i].name);
    }
    setImages(newImages);
    setFileNames(newFileNames);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    const newFileNames = [...fileNames];
    newImages.splice(index, 1);
    newFileNames.splice(index, 1);
    setImages(newImages);
    setFileNames(newFileNames);
  };


  const onSubmit = async (data) => {
    const {
      title,
      description,
      category,
      price,
      warranty,
      weight,
      model,
      quantity,
      brand,
      return_policy,
      manufacturer,
      country_of_origin,
      shipping_restrictions,
      shipping_dimensions,
      shipping_weight,
      availability,
      usage,
      certification,
      material
    } = data;


    // const cover_image = await uploadImage();
    const product = {
      title,
      description,
      category,
      price,
      warranty,
      weight,
      model,
      quantity,
      brand,
      return_policy,
      manufacturer,
      country_of_origin,
      shipping_restrictions,
      shipping_dimensions,
      shipping_weight,
      availability,
      usage,
      certification,
      material,
      upload_time: new Date().toISOString(),
    };

console.log(product);


    const res = await axiosPublic.post("/products", product);

    if (res?.data) {
      // reset();
      // Swal.fire("Book upload successful");
      console.log("add product successfull");
    }
  };

  return (
    <section className="max-w-7xl px-4 py-4 mx-auto bg-zinc-700 rounded-md shadow-md dark:bg-gray-800 mt-6 mb-9">
      <h1 className="text-3xl font-bold text-white text-center dark:text-white py-10 ">
        Add Product
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
            {/*  title */}
            <div>
              <label className="text-white "> Title </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("title")}
                placeholder=" Title"
                type="text"
                required
              />
            </div>

            {/*  Brand */}
            <div>
              <label className="text-white "> Brand </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("brand")}
                placeholder=" Brand"
                type="text"
                required
              />
            </div>

            {/*Price  */}
            <div>
              <label className="text-white "> Price </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("price")}
                placeholder=" Price"
                type="number"
                required
              />
            </div>
            {/* quantity */}
            <div>
              <label className="text-white "> Quantity </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("quantity")}
                placeholder=" Quantity"
                type="number"
                required
              />
            </div>
            {/* model */}
            <div>
              <label className="text-white "> Model </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("model")}
                placeholder=" Model"
                type="text"
                required
              />
            </div>

            {/* weight */}
            <div>
              <label className="text-white "> Weight </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("weight")}
                placeholder=" Weight"
                type="number"
                required
              />
            </div>

            {/* Warranty */}
            <div>
              <label className="text-white "> Warranty </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("warranty")}
                placeholder=" Warranty"
                type="text"
                required
              />
            </div>
            {/* material */}
            <div>
              <label className="text-white "> Material </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("material")}
                placeholder=" Material"
                type="text"
                required
              />
            </div>
            {/* certification */}
            <div>
              <label className="text-white "> Certification </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("certification")}
                placeholder=" Certification"
                type="text"
                required
              />
            </div>
            {/* usage */}
            <div>
              <label className="text-white "> Usage </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("usage")}
                placeholder=" usage"
                type="text"
                required
              />
            </div>
            {/* availability */}
            <div>
              <label className="text-white "> Availability </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("availability")}
                placeholder=" Availability"
                type="text"
                required
              />
            </div>
            {/* shipping_weight */}
            <div>
              <label className="text-white "> Shipping Weight </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("shipping_weight")}
                placeholder=" Shipping_weight"
                type="text"
                required
              />
            </div>
            {/* shipping_dimensions */}
            <div>
              <label className="text-white ">  shipping_dimensions </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("shipping_dimensions")}
                placeholder=" shipping_dimensions"
                type="text"
                required
              />
            </div>
            {/* shipping_restrictions */}
            <div>
              <label className="text-white ">  shipping_restrictions </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("shipping_restrictions")}
                placeholder=" shipping_restrictions"
                type="text"
                required
              />
            </div>
            {/* shipping_restrictions */}
            <div>
              <label className="text-white ">  country_of_origin </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("country_of_origin")}
                placeholder=" country_of_origin"
                type="text"
                required
              />
            </div>
            {/* manufacturer */}
            <div>
              <label className="text-white ">  manufacturer </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("manufacturer")}
                placeholder=" manufacturer"
                type="text"
                required
              />
            </div>
            {/* return_policy */}
            <div>
              <label className="text-white ">  return_policy </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("return_policy")}
                placeholder=" return_policy"
                type="text"
                required
              />
            </div>
            {/* book category */}
            {/* <select
              className="h-11 w-full text-xs md:text-sm text-gray-400 px-2 bg-teal-50/40 border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
              {...register("category")}
            >
              <option selected hidden value="">
                Book Category
              </option>
              {categories?.map((category) => (
                <option key={category?._id} value={category?.category_name}>
                  {category?.category_name}
                </option>
              ))}
            </select> */}
            {/* book language */}
            <select
              className="h-11 w-full px-2 text-xs md:text-sm bg-teal-50/40 border border-[#2802a5] text-gray-400 rounded-lg focus:outline-none shadow-md"
              {...register("language")}
            >
              <option selected value="">
                Book Language
              </option>
              <option value="english">English</option>
              <option value="bangla">Bangla</option>
              <option value="arabic">Arabic</option>
            </select>
          </div>
        </div>

        {/* Image input */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-white">
            Images
          </label>
          <div className="flex flex-wrap items-center mt-2">
            {images.map((image, index) => (
              <div key={index} className="relative mr-4 mb-4">
                <img
                  src={image}
                  alt={fileNames[index]}
                  className="max-h-40 w-auto"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            ))}
          </div>
          {/* Upload button */}
          <div
            onClick={() => document.querySelector("#image").click()}
            className="cursor-pointer mt-4 p-4 border border-gray-300 rounded-md flex items-center justify-center"
          >
            <LuUpload className="text-3xl text-[#F01543] mx-auto"></LuUpload>{" "}
            <p className="ml-2">Add Image</p>{" "}
          </div>
          {/* Hidden file input */}
          <input
            type="file"
            id="image"
            accept="image/*"
            className="hidden"
            multiple
            onChange={(e) => handleImageChange(e.target.files)}
          />
        </div>

        {/* Save button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-16 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;




























// import React from "react";
// import { useForm } from "react-hook-form";
// import { LuUpload } from "react-icons/lu";
// import { MdDeleteOutline } from "react-icons/md";

// const AddProduct = () => {
//   const { register, handleSubmit } = useForm();
//   const [images, setImages] = React.useState([]);
//   const [fileNames, setFileNames] = React.useState([]);

//   const handleImageChange = (files) => {
//     const newImages = [...images];
//     const newFileNames = [...fileNames];
//     for (let i = 0; i < files.length; i++) {
//       newImages.push(URL.createObjectURL(files[i]));
//       newFileNames.push(files[i].name);
//     }
//     setImages(newImages);
//     setFileNames(newFileNames);
//   };

//   const handleRemoveImage = (index) => {
//     const newImages = [...images];
//     const newFileNames = [...fileNames];
//     newImages.splice(index, 1);
//     newFileNames.splice(index, 1);
//     setImages(newImages);
//     setFileNames(newFileNames);
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <section className="max-w-5xl p-6 mx-auto bg-zinc-700 rounded-md shadow-md dark:bg-gray-800 mt-20 mb-9">
//       <h1 className="text-3xl font-bold text-white text-center dark:text-white">
//         Add Product
//       </h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//           <div>
//             <label
//               htmlFor="productName"
//               className="text-white dark:text-gray-200"
//             >
//               Product Name
//             </label>
//             <input
//               id="productName"
//               type="text"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
//               {...register("productName")}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="productName"
//               className="text-white dark:text-gray-200"
//             >
//               Product Name
//             </label>
//             <input
//               id="productName"
//               type="text"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
//               {...register("productName")}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="productName"
//               className="text-white dark:text-gray-200"
//             >
//               Product Name
//             </label>
//             <input
//               id="productName"
//               type="text"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
//               {...register("productName")}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="productName"
//               className="text-white dark:text-gray-200"
//             >
//               Product Name
//             </label>
//             <input
//               id="productName"
//               type="text"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
//               {...register("productName")}
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="productName"
//               className="text-white dark:text-gray-200"
//             >
//               Product Name
//             </label>
//             <input
//               id="productName"
//               type="text"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
//               {...register("productName")}
//             />
//           </div>

//           <div>
//             <label htmlFor="category" className="text-white dark:text-gray-200">
//               Category
//             </label>
//             <select
//               id="category"
//               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
//               {...register("category")}
//             >
//               <option>Demo</option>
//               <option>Demo</option>
//               <option>Demo</option>
//             </select>
//           </div>
//           <div>
//             <label className="text-white dark:text-gray-200" htmlFor="textarea">
//               Text Area
//             </label>
//             <textarea
//               id="textarea"
//               {...register("textarea")}
//               className="block w-full h-60 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
//             ></textarea>
//           </div>
//           {/* Image input */}
//           <div>
//             <label className="block text-sm font-medium text-white">
//               Image
//             </label>
//             <div className="flex space-x-4">
//               {images.map((image, index) => (
//                 <div key={index} className="relative">
//                   <img
//                     src={image}
//                     alt={fileNames[index]}
//                     className="max-h-40 object-cover w-full"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveImage(index)}
//                     className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
//                   >
//                     <MdDeleteOutline />
//                   </button>
//                 </div>
//               ))}
//             </div>
//             {/* Upload button */}
//             <div
//               onClick={() => document.querySelector("#image").click()}
//               className="cursor-pointer mt-4 p-4 border border-gray-300 rounded-md flex items-center justify-center"
//             >
//               <LuUpload className="text-3xl text-[#F01543] mx-auto"></LuUpload>{" "}
//               <p className="ml-2">Add Image</p>{" "}
//             </div>
//             {/* Hidden file input */}
//             <input
//               type="file"
//               id="image"
//               accept="image/*"
//               className="hidden"
//               multiple
//               onChange={(e) => handleImageChange(e.target.files)}
//             />
//           </div>
//         </div>

//         {/* Save button */}
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="px-16 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default AddProduct;
