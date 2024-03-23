import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);

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
            <label className="text-white dark:text-gray-200" htmlFor="">
              Demo
            </label>
            <input
              id=""
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="">
              Demo
            </label>
            <input
              id=""
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-white dark:text-gray-200" htmlFor="">
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
            <div>
              <div className="flex space-x-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={fileNames[index]}
                      className="max-h-40 object-cover w-full"
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
                className="cursor-pointer mt-4 p-16 border border-gray-300 rounded-md  items-center justify-center"
              >
                <LuUpload className="text-3xl text-[#F01543] mx-auto"></LuUpload>{" "}
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
