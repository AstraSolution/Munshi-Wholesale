import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { useLoaderData, useNavigate } from 'react-router';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { toast, Toaster } from 'react-hot-toast';

export default function UpdateProduct() {
    const updateProduct = useLoaderData()
    const navigete = useNavigate()


    const { _id, title, brand, category, availability, certification, color, warranty, discountPrice, model, variant, usage, weight, return_policy, country_of_origin, description, dimensions, manufacturer, material, price, quantity, recommended_applications, offer, included_accessories, features, shipping_method, shipping_weight, shipping_dimensions, shipping_restrictions, image } = updateProduct || {};


    const { register, handleSubmit, setValue, watch } = useForm();
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState(updateProduct?.image || []);
    const [fileNames, setFileNames] = useState([]);
    const [fields, setFields] = useState(features || []);
    const [fieldValues, setFieldValues] = useState(fields.map(() => ""));
    const axiosPuplic = useAxiosPublic()




    useEffect(() => {
        if (formData) {
            setImages(formData.images || []);
        }
        if (features && features.length > 0) {
            setFieldValues(features);
        }
    }, [formData, setValue, features]);


    const handleFieldValueChange = (index, value) => {
        const newFieldValues = [...fieldValues];
        newFieldValues[index] = value;
        setFieldValues(newFieldValues);
    };

    const handleAddField = () => {
        setFields([...fields, ""]);
        setFieldValues([...fieldValues, ""]);
    };

    const handleRemoveField = (index) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);

        const newFieldValues = [...fieldValues];
        newFieldValues.splice(index, 1);
        setFieldValues(newFieldValues);
    };



    const handleImageChange = (files) => {
        const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
        const newFileNames = Array.from(files).map((file) => file.name);
        setImages((prevImages) => [...prevImages, ...newImages]);
        setFileNames((prevFileNames) => [...prevFileNames, ...newFileNames]);
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
        try {
            setLoading(true);

            data.images = images;
            data.features = fieldValues;
            const discountPrice = watch("discountPrice");
            data.discountPrice = discountPrice;

            const {
                title, brand, category, availability, certification, color, warranty, model, variant, usage, weight, return_policy, country_of_origin, description, manufacturer, material, price, quantity, included_accessories, features, shipping_method, shipping_weight, shipping_dimensions, shipping_restrictions,
            } = data || {}

            const updateProduct = {
                title, brand, category, availability, certification, color, warranty, model, variant, usage, weight, return_policy, country_of_origin, description, manufacturer, material, price, quantity, included_accessories, features, shipping_method, shipping_weight, shipping_dimensions, shipping_restrictions, images,
                discountPrice,
                features,
            }

           

            const res = await axiosPuplic.put(`/products/${_id}`, updateProduct);
            if (res?.data) {
                toast.success("Product updated successfully");

                setTimeout(() => {
                    navigete("/dashboard/my_all_product")
                }, 1000);
            }


        } catch (error) {
            console.error("Error updating product:", error);
            toast.error("Please try again");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div>
            <section className="w-full px-4 lg:py-4 bg-gray-100 rounded-lg  mb-9">
                <h1 className="text-center text-2xl font-bold text-gray-800 ">
                    Product information
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <div className="lg:flex  gap-5 ">
                            <div className="lg:w-8/12 w-full  rounded-md bg-gray-100 border-slate-600 px-4 py-4 my-2 mb-5">
                                {/*  title */}
                                <div>
                                    <label className="text-gray-800 text-lg ">
                                        {" "}
                                        Product Title{" "}
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("title")}
                                        placeholder="Product Title"
                                        type="text"
                                        required
                                        defaultValue={title}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-2 ">
                                    {/*  brand */}
                                    <div className="w-full">
                                        <label className="text-gray-800 text-lg  ">Brand</label>
                                        <select
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("brand")}
                                            required

                                            defaultValue={brand}
                                        >
                                            <option value="">Select Brand</option>

                                            <option value="DeWalt ">DeWalt</option>
                                            <option value="Milwaukee ">Milwaukee</option>
                                            <option value="Makita ">Makita</option>
                                            <option value="Bosch ">Bosch</option>
                                            <option value="Ridgid ">Ridgid</option>
                                            <option value="Craftsman ">Craftsman</option>
                                            <option value="Stanley ">Stanley</option>
                                            <option value="Husqvarna ">Husqvarna</option>
                                            <option value="Hitachi ">Hitachi</option>
                                            <option value="Black & Decker ">Black & Decker</option>
                                            <option value="Ryobi ">Ryobi</option>
                                            <option value="Porter-Cable ">Porter-Cable</option>
                                            <option value="Dremel ">Dremel</option>
                                            <option value="Kobalt ">Kobalt</option>
                                            <option value="Fein ">Fein</option>
                                            <option value="Worx ">Worx</option>
                                            <option value="Hilti ">Hilti</option>
                                            <option value="Paslode ">Paslode</option>
                                            <option value="Ingersoll Rand ">Ingersoll Rand</option>
                                            <option value="Stihl ">Stihl</option>
                                        </select>
                                    </div>
                                    {/*  category */}
                                    <div className="w-full">
                                        <label className="text-gray-800 text-lg  ">Category</label>
                                        <select
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("category")}
                                            required
                                            defaultValue={category}
                                        >
                                            <option value="">Select Category</option>

                                            <option value="Power Tools">Power Tools</option>
                                            <option value="Hand Tools">Hand Tools</option>
                                            <option value="Gardening Tools">Gardening Tools</option>
                                            <option value="Electrical Equipment ">Electrical Equipment</option>
                                            <option value="Safety Equipment ">Safety Equipment</option>
                                            <option value="Construction Equipment ">Construction Equipment</option>
                                            <option value="Automotive Tools ">Automotive Tools</option>
                                            <option value="Measuring & Layout Tools ">Measuring & Layout Tools</option>
                                            <option value="Woodworking Tools ">Woodworking Tools</option>
                                            <option value="Metalworking Tools ">Metalworking Tools</option>
                                            <option value="Painting Supplies ">Painting Supplies</option>
                                            <option value="Plumbing Tools ">Plumbing Tools</option>
                                            <option value="Cleaning Equipment ">Cleaning Equipment</option>
                                            <option value="Storage & Organization ">Storage & Organization</option>
                                            <option value="Welding & Soldering ">Welding & Soldering</option>
                                            <option value="Fasteners & Hardware ">Fasteners & Hardware</option>
                                            <option value="Material Handling ">Material Handling</option>
                                            <option value="Adhesives & Sealants ">Adhesives & Sealants</option>
                                            <option value="Air Tools ">Air Tools</option>
                                            <option value="Outdoor Power Equipment ">Outdoor Power Equipment</option>
                                        </select>
                                    </div>

                                    {/* model */}
                                    <div>
                                        <label className="text-gray-800 text-lg  "> Model </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"

                                            {...register("model")}
                                            placeholder=" Model Name"
                                            type="text"
                                            required
                                            defaultValue={model}
                                        />
                                    </div>
                                    {/* Variant */}
                                    <div>
                                        <label className="text-gray-800 text-lg "> Variant </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("variant")}
                                            placeholder="variant"
                                            type="text"
                                            required
                                            defaultValue={variant}
                                        />
                                    </div>
                                </div>


                            </div>
                            {/* pricing */}

                            <div className="border border-gray-300 lg:w-4/12 w-full px-4 py-8 my-2 rounded-md ">
                                <div className="pb-5">
                                    <h1 className="border-b-2 border-gray-400 text-center text-xl font-semibold text-gray-900 pb-4">
                                        Pricing
                                    </h1>
                                </div>
                                <div>
                                    <label className="text-gray-800 text-lg  "> Main Price </label>
                                    <input
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("price")}
                                        placeholder="$ 00"
                                        type="number"
                                        required
                                        defaultValue={price}
                                    />
                                </div>
                                <div className="mt-2">
                                    <label className="text-gray-800 text-lg ">Discount Price</label>
                                    <input
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("discountPrice")}
                                        placeholder="$ Set Discount Price"
                                        type="number"
                                        required
                                        defaultValue={updateProduct?.discountPrice || ""}
                                    />
                                </div>
                            </div>
                        </div>


                        {/* second step */}
                        <div className=" lg:flex  gap-5">
                            <div className="lg:w-8/12 w-full  border-2 border-gray-300 rounded-md px-4 py-4  ">
                                <h1 className="text-center text-xl text-gray-900 font-semibold mb-3">
                                    Organization
                                </h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 ">
                                    {/* return policy] */}
                                    <div>
                                        <label className="text-gray-800 text-lg  ">
                                            {" "}
                                            Return Policy{" "}
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("return_policy")}
                                            placeholder="Return Policy"
                                            type="text"
                                            defaultValue={return_policy}
                                        />
                                    </div>

                                    {/* included_accessories */}
                                    <div>
                                        <label className="text-gray-800 text-lg  ">
                                            {" "}
                                            Included Accessories{" "}
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("included_accessories")}
                                            placeholder="Included Accessories"
                                            type="text"
                                            defaultValue={included_accessories}
                                        />
                                    </div>

                                    {/* material */}
                                    <div>
                                        <label className="text-gray-800 text-lg  "> Material </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("material")}
                                            placeholder=" Material"
                                            type="text"
                                            defaultValue={material} />
                                    </div>

                                    {/* color */}
                                    <div>
                                        <label className="text-gray-800 text-lg  ">Color </label>


                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("color")}
                                            placeholder="Color"
                                            type="text"
                                            defaultValue={color}
                                        />
                                    </div>
                                    {/* warranty */}
                                    <div>
                                        <label className="text-gray-800 text-lg  "> Warranty </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("warranty")}
                                            placeholder="Warranty"
                                            type="text"
                                            defaultValue={warranty}
                                        />
                                    </div>

                                    {/* usage */}
                                    <div>
                                        <label className="text-gray-800 text-lg  "> Usage </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("usage")}
                                            placeholder="Usage"
                                            type="text"
                                            defaultValue={usage}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="border-2 border-gray-300 lg:w-4/12 w-full px-4 py-4">
                                <h1 className="text-center font-semibold  ">Variants</h1>

                                {/* quantity */}
                                <div>
                                    <label className="text-gray-800 text-lg  "> Quantity </label>
                                    <input
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("quantity")}
                                        placeholder="Quantity"
                                        type="number"
                                        defaultValue={quantity}
                                    />
                                </div>
                                {/* weight */}
                                <div className="my-4">
                                    <label className="text-gray-800 text-lg "> Weight </label>
                                    <input
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("weight")}
                                        placeholder=" Weight"
                                        type="text"
                                        defaultValue={weight}
                                    />
                                </div>

                                {/* availability */}
                                <div>
                                    <label className="text-gray-800 text-lg  ">Availability </label>
                                    <input
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("availability")}
                                        placeholder=" Availability"
                                        type="text"
                                        defaultValue={availability}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* third step */}

                        <div className="lg:flex  gap-5 mt-2">
                            <div className="lg:w-8/12 w-full border-2 border-gray-300 px-4 py-4  my-2">
                                <h1 className="font-semibold text-gray-900 text-center mb-3 ">
                                    {" "}
                                    Shipping Information{" "}
                                </h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                    {/* certification */}
                                    <div >
                                        <label className="text-gray-800 text-lg ">
                                            {" "}
                                            Certification{" "}
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("certification")}
                                            placeholder=" Certification"
                                            type="text"
                                            defaultValue={certification}
                                        />
                                    </div>

                                    {/* shipping_weight */}
                                    <div>
                                        <label className="text-gray-800 text-lg  ">
                                            {" "}
                                            Shipping Weight{" "}
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("shipping_weight")}
                                            placeholder=" Shipping Weight"
                                            type="text"
                                            defaultValue={shipping_weight}
                                        />
                                    </div>

                                    {/* shipping_dimensions */}
                                    <div>
                                        <label className="text-gray-800 text-lg ">
                                            {" "}
                                            Shipping Dimensions{" "}
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("shipping_dimensions")}
                                            placeholder="Shipping Dimensions"
                                            type="text"
                                            defaultValue={shipping_dimensions}
                                        />
                                    </div>

                                    {/* shipping_restrictions */}
                                    <div>
                                        <label className="text-gray-800 text-lg  ">
                                            {" "}
                                            Shipping Restrictions{" "}
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("shipping_restrictions")}
                                            placeholder="Shipping Restrictions"
                                            type="text"
                                            defaultValue={shipping_restrictions}
                                        />
                                    </div>

                                    {/* country_of_origin */}
                                    <div>
                                        <label className="text-gray-800 text-lg  ">
                                            {" "}
                                            Country Of Origin{" "}
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("country_of_origin")}
                                            placeholder="Country Of Origin"
                                            type="text"
                                            defaultValue={country_of_origin}
                                        />
                                    </div>
                                    {/* manufacturer */}
                                    <div>
                                        <label className="text-gray-800 text-lg  ">
                                            {" "}
                                            Manufacturer{" "}
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("manufacturer")}
                                            placeholder="Manufacturer"
                                            type="text"
                                            defaultValue={manufacturer}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-800 text-lg ">
                                            {" "}
                                            Shipping_method{" "}
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                            {...register("shipping_method")}
                                            placeholder="Shipping_method"
                                            type="text"
                                            defaultValue={shipping_method}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* description */}
                            <div className="w-full lg:w-4/12 mt-3 ">
                                <h1 className="text-gray-800 text-lg mb-3 ">Description</h1>
                                <textarea
                                    className="border lg:h-[370px] w-full lg:mt-3 mt-2 h-auto md:min-h-60 min-h-32 border-gray-400 px-4 py-2 text-gray-800  rounded-lg bg-gray-100  focus:outline-none focus:border-blue-500 "
                                    {...register("description")}
                                    placeholder="Description"
                                    defaultValue={description}
                                ></textarea>
                            </div>
                        </div>
                        {/* Dynamic add field button */}
                        <h1 className="text-center lg:text-left text-gray-900 font-semibold py-1 md:py-2 lg:py-3">
                            {" "}
                            Specification Information{" "}
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {fields?.map((field, index) => (
                                <div key={index} className="">
                                    <label className="text-gray-800 text-lg">
                                        Specification Features {index + 1}
                                    </label>
                                    <input
                                        value={fieldValues[index] || ""}
                                        onChange={(e) => handleFieldValueChange(index, e.target.value)}
                                        type="text"
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveField(index)}
                                        className="text-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            {/* Add Field button */}
                            <button
                                type="button"
                                onClick={handleAddField}
                                className="btn text-green-600"
                            >
                                Add Features
                            </button>
                        </div>
                    </div>
                    {/* Image input */}



                    <div className="mb-4">
                        <div className="mt-6">
                            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 items-center mt-2">
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
                                            className="absolute top-0 right-0 bg-[#FF9D00] text-gray-800 p-1 rounded-full"
                                        >
                                            <MdDeleteOutline />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <label className="block md:text-2xl text-gray-800 text-sm font-bold mb-2">Upload Image</label>
                            <div
                                onClick={() => document.querySelector("#image").click()}
                                className="cursor-pointer mt-4 p-4 border bg-gray-800 rounded-md flex items-center justify-center"
                            >
                                <LuUpload className="text-3xl text-[#FF9D00] mx-auto"></LuUpload>{" "}
                                <p className="ml-2"></p>{" "}
                            </div>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                className="hidden"
                                multiple
                                onChange={(e) => handleImageChange(e.target.files)}
                            />
                        </div>
                    </div>
                    {/* Save button */}
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className=" py-2 rounded-xl  text-gray-900 shadow-md px-6 font-semibold bg-slate-900"
                            disabled={loading}
                        >
                            {loading ? "Updateing..." : " Update Product"}

                        </button>
                    </div>
                </form>
                <Toaster></Toaster>
            </section>
        </div>
    )
}

