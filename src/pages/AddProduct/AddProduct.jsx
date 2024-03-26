import React from "react";
import { useForm } from "react-hook-form";
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = React.useState([]);
  const [fileNames, setFileNames] = React.useState([]);

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
      brand,
      category,
      price,
      quantity,
      model,
      voltes,
      power_source,
      battery_type,
      max_torque,
      speed_settings,
      chuck_size,
      clutch_settings,
      safety_features,
      compatibility,
      included_accessories,
      color,
      verint,
      weight,
      warranty,
      material,
      certification,
      usage,
      availability,
      shipping_weight,
      shipping_dimensions,
      shipping_restrictions,
      country_of_origin,
      manufacturer,
      return_policy,
      description,
    } = data;

    // const cover_image = await uploadImage();
    const product = {
      title,
      brand,
      category,
      price,
      quantity,
      model,
      included_accessories,
      color,
      verint,
      weight,
      warranty,
      material,
      certification,
      usage,
      availability,
      shipping_weight,
      shipping_dimensions,
      shipping_restrictions,
      country_of_origin,
      manufacturer,
      return_policy,
      description,

      specification: {
        voltes,
        power_source,
        battery_type,
        max_torque,
        speed_settings,
        chuck_size,
        clutch_settings,
        safety_features: ["Overload protection", "Non-slip grip"],
        compatibility: [],
      },

      upload_time: new Date().toISOString(),
    };

    console.log(product);

    const res = await useAxiosPublic.post("/products", product);
    if (res?.data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book upload successful",
        showConfirmButton: false,
        timer: 1500,
      });
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
              <label className="text-white "> Product Title </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("title")}
                placeholder=" Title"
                type="text"
                required
              />
            </div>

            {/*  brand */}
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

            {/*  category */}
            <div>
              <label className="text-white "> category </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("category")}
                placeholder=" category"
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

            {/* voltes */}
            <div>
              <label className="text-white "> Voltes </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("voltes")}
                placeholder=" Voltes"
                type="text"
                required
              />
            </div>

            {/* power_source */}
            <div>
              <label className="text-white "> power_source </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("power_source")}
                placeholder=" Power Source"
                type="text"
                required
              />
            </div>

            {/* battery_type */}
            <div>
              <label className="text-white "> battery_type </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("battery_type")}
                placeholder="  battery_type"
                type="text"
                required
              />
            </div>

            {/* max_torque */}
            <div>
              <label className="text-white "> max_torque </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("max_torque")}
                placeholder="max_torque"
                type="text"
                required
              />
            </div>

            {/* speed_settings */}
            <div>
              <label className="text-white "> speed_settings </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("speed_settings")}
                placeholder="speed_settings"
                type="text"
                required
              />
            </div>

            {/* chuck_size */}
            <div>
              <label className="text-white "> chuck_size </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("chuck_size")}
                placeholder="chuck_size"
                type="text"
                required
              />
            </div>

            {/* clutch_settings */}
            <div>
              <label className="text-white "> clutch_settings </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("clutch_settings")}
                placeholder="clutch_settings"
                type="text"
                required
              />
            </div>

            {/* safety_features */}
            <div>
              <label className="text-white "> safety_features </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("safety_features")}
                placeholder="safety_features"
                type="text"
                required
              />
            </div>

            {/* compatibility */}
            <div>
              <label className="text-white "> compatibility </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("compatibility")}
                placeholder="compatibility"
                type="text"
                required
              />
            </div>

            {/* included_accessories */}
            <div>
              <label className="text-white "> included_accessories </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("included_accessories")}
                placeholder="included_accessories"
                type="text"
                required
              />
            </div>

            {/* color */}
            <div>
              <label className="text-white "> color </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("color")}
                placeholder="color"
                type="color"
                required
              />
            </div>

            {/* verint */}
            <div>
              <label className="text-white "> verint </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("verint")}
                placeholder="verint"
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
              <label className="text-white "> shipping_dimensions </label>
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
              <label className="text-white "> shipping_restrictions </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("shipping_restrictions")}
                placeholder=" shipping_restrictions"
                type="text"
                required
              />
            </div>

            {/* country_of_origin */}
            <div>
              <label className="text-white "> country_of_origin </label>
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
              <label className="text-white "> manufacturer </label>
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
              <label className="text-white "> return_policy </label>
              <input
                className="h-11 w-full px-2 text-xs md:text-sm  border border-[#2802a5] rounded-lg focus:outline-none shadow-md"
                {...register("return_policy")}
                placeholder=" return_policy"
                type="text"
                required
              />
            </div>

            {/* description */}
            <div>
              <label className="text-white "> Dscription </label>
              <textarea
                {...register("description")}
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Image input */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-white">Images</label>
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
