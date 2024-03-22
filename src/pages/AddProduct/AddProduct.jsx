import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No Selected File");

  return (
    <section className="max-w-5xl p-6 mx-auto bg-zinc-700 rounded-md shadow-md dark:bg-gray-800 mt-20 mb-9">
      <h1 className="text-3xl font-bold text-white text-center dark:text-white">
        Add Product
      </h1>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-white dark:text-gray-200"
              htmlFor="product name"
            >
              Product Name
            </label>
            <input
              id="Product Name"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-white dark:text-gray-200" htmlFor="quantity">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-white dark:text-gray-200" htmlFor="password">
              Demo
            </label>
            <input
              id=""
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-white dark:text-gray-200"
              htmlFor=""
            >
              Demo
            </label>
            <input
              id=""
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-white dark:text-gray-200"
              htmlFor=""
            >
              Demo
            </label>
            <input
              id=""
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-white dark:text-gray-200"
              htmlFor=""
            >
              Demo
            </label>
            <input
              id=""
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-white dark:text-gray-200" htmlFor="select">
              Category
            </label>
            <select
              id="select"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option>Demo</option>
              <option>Demo</option>
              <option>Demo</option>
            
            </select>
          </div>

          <div>
            <label className="text-white dark:text-gray-200" htmlFor="date">
              Demo
            </label>
            <input
              id="date"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-white dark:text-gray-200" htmlFor="textarea">
              Text Area
            </label>
            <textarea
              id="textarea"
              className="block w-full h-60 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Image
            </label>
            <div className="flex-[3] space-y-5">
              <div
                onClick={() => document.querySelector("#image").click()}
                className=" w-full rounded-md cursor-pointer min-h-80 px-8 flex items-center justify-center bg-[#F9FAFB]"
              >
                <input
                  type="file"
                  name=""
                  id="image"
                  accept="image/*"
                  hidden
                  onChange={({ target: { files } }) => {
                    files[0] && setFileName(files[0].name);
                    if (files) {
                      setImage(URL.createObjectURL(files[0]));
                    }
                  }}
                />

                {image ? (
                  <img
                    className="max-h-72 p-2 bg-white rounded-md"
                    src={image}
                    alt={fileName}
                  />
                ) : (
                  <div className="text-[#F01543] space-y-4 font-semibold ">
                    <LuUpload className="text-3xl text-[#F01543] mx-auto "></LuUpload>{" "}
                    <p>Browse Files to upload</p>{" "}
                  </div>
                )}
              </div>
              {fileName ? (
                <div className="p-3 bg-[#F9FAFB] rounded-md flex items-center justify-between">
                  <p>{fileName}</p>
                  <span
                    onClick={() => {
                      setImage(null);
                      setFileName("No Selected File");
                    }}
                    className="p-4 bg-[#F01543] rounded text-white font-bold cursor-pointer  text-sm md:text-base lg:text-lg "
                  >
                    <MdDeleteOutline className="text-2xl"></MdDeleteOutline>
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1 text-white">or drag and drop</p>
                </div>
                <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex justify-center  mt-6">
          <button className="px-16 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
