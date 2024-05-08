import React from "react";

export default function Newsletter() {
  return (
    <div className="bg-[url('https://dt-fixxer.myshopify.com/cdn/shop/files/grid-12.jpg?v=1665381381')] bg-[#00000065] bg-blend-overlay">
      <div className="container mx-auto py-12 sm:py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl md:text-4xl font-extrabold text-white">
              Stay Updated with Our Newsletter
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 lg:w-1/2 mx-auto">
              Subscribe to our newsletter and get the latest news, updates, and
              insights in the world of hardware tech.
            </p>
          </div>

          <form className="flex items-center justify-center mt-5 w-full">
            <input
              type="email"
              className="px-4 py-4 rounded-lg w-3/4 lg:w-1/2"
              placeholder="Enter your email"
            />
            <div>
              <button
                type="submit"
                className="bg-yellow-500 font-semibold px-4 py-4 -ml-3 rounded-tr-lg rounded-br-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
