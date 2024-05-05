import React from "react";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <>
      <footer className="font-[sans-serif] bg-black py-12 px-10 font-montserrat bg-[url('https://i.ibb.co/1rwqq8k/footerbg.png')]">
        <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-6 md:gap-8 lg:gap-12">

          <div>
            <div className="">
              <img className="w-44 mb-4 " src="https://i.ibb.co/x576tv6/munshi-removebg-preview.png" alt="" />
              <ul className="space-y-5">
                <li><a className="text-gray-300 hover:text-white text-[12px]"> <p>No: 58 A, East Madison Street,
                  Baltimore, MD, USA 4508</p> </a></li>

                <li className="text-gray-300 text-[15px] hover:text-red-600  flex items-center gap-1"> <span><TfiEmail></TfiEmail></span> <p className="text-sm ">astrasolution07@gmail.com</p></li>

                <li><a className="text-[#FF9D00] text-[15px]"> 0000 - 123 - 456789 </a></li>
              </ul>
            </div>
          </div>



          <div className="md:ml-10">
            <div>
              <h1 className="text-[#FF9D00] text-lg font-bold lg:mb-5 mb-2 font-montserrat lg:mt-5 mt-1 ">Know Us</h1>
              <ul className="lg:space-y-2 space-y-1 md:space-y-2">

                <li><a className="text-gray-300 hover:text-red-600 text-[15px]"> Home</a></li>
                <li><a className="text-gray-300 hover:text-red-600 text-[15px]">About Us</a></li>
                <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Contact</a></li>
                <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Faq</a></li>
                <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Blog</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-[#FF9D00] text-lg font-bold lg:mb-5 mb-2 font-montserrat lg:mt-5 mt-1">Useful Link</h1>
            <ul className="lg:space-y-2 space-y-1 md:space-y-2">

              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Store Map</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Help</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Services</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Search Product</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FF9D00] text-lg font-bold lg:mb-5 mb-2 font-montserrat lg:mt-5 mt-1">Information</h4>
            <ul className="lg:space-y-2 space-y-1 md:space-y-2">
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Order</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Order Status</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Deliveries</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Wishlist</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FF9D00] text-lg font-bold lg:mb-5 mb-2 font-montserrat lg:mt-5 mt-1 ">Special Offers</h4>
            <ul className="lg:space-y-2 space-y-1 md:space-y-2">
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Terms & Condition</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Terms of Service</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Privacy Policy</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Shipping Information</a></li>
              <li><a className="text-gray-300 hover:text-red-600 text-[15px]">Returns & Exchanges</a></li>
            </ul>
          </div>
        </div>

        <div className="border-b mt-10 border-gray-500 w-full  "></div>
        <div className=" lg:flex  items-center justify-between px-2 md:px-3 lg:px-5 text-gray-300 mt-4">
          <div className="text-sm ">
            <p>© 2024 munshi-multispare <span className="hover:text-red-600"> Online Platform</span></p>
          </div>
          <div className="md:flex items-center ">
            <p className="text-sm text-center">We Accepted</p>
            <img className="w-80 mx-auto " src="https://i.ibb.co/QNttYCj/caed1-removebg-preview.png" alt="" />
          </div>
        </div>
      </footer>

    </>
  );
}
