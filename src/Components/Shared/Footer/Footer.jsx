import React from "react";
import { TfiEmail } from "react-icons/tfi";
import FooterLink from "./FooterLink";
import LIGHT_LOGO from "../../../assets/light-logo.png";

export default function Footer() {
  return (
    <>
      <footer className="font-[sans-serif] bg-black py-12 font-montserrat bg-[url('https://i.ibb.co/1rwqq8k/footerbg.png')]">
        <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          <div>
            <div className="">
              <img className="w-44 mb-4 " src={LIGHT_LOGO} alt="" />
              <ul className="space-y-5">
                <li>
                  <a className="text-gray-300 hover:text-white text-[12px]">
                    {" "}
                    <p>
                      No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                    </p>{" "}
                  </a>
                </li>

                <li className="text-gray-300 text-[15px] hover:text-red-600  flex items-center gap-1">
                  {" "}
                  <span>
                    <TfiEmail></TfiEmail>
                  </span>{" "}
                  <p className="text-sm ">astrasolution07@gmail.com</p>
                </li>

                <li>
                  <a className="text-[#FF9D00] text-[15px]">
                    {" "}
                    0000 - 123 - 456789{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:ml-10">
            <div>
              <h1 className="text-[#FF9D00] text-lg font-bold lg:mb-5 mb-2 font-montserrat lg:mt-5 mt-1 ">
                Know Us
              </h1>
              <ul className="lg:space-y-2 space-y-1 md:space-y-2">
                <FooterLink path={"/"}>Home</FooterLink>
                <FooterLink path={"/aboutUs"}>About Us</FooterLink>
                <FooterLink path={"/contactUs"}>Contact</FooterLink>
                <FooterLink path={"/faq"}>FAQ</FooterLink>
                <FooterLink path={"/blogs"}>Blog</FooterLink>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-[#FF9D00] text-lg font-bold lg:mb-5 mb-2 font-montserrat lg:mt-5 mt-1">
              Useful Link
            </h1>
            <ul className="lg:space-y-2 space-y-1 md:space-y-2">
              <FooterLink path={"/"}>Store Map</FooterLink>
              <FooterLink path={"/"}>Help</FooterLink>
              <FooterLink path={"/"}>Services</FooterLink>
              <FooterLink path={"/"}>Search Product</FooterLink>
              <FooterLink path={"/"}>Search Product</FooterLink>
              <FooterLink path={"/"}>Career</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FF9D00] text-lg font-bold lg:mb-5 mb-2 font-montserrat lg:mt-5 mt-1">
              Information
            </h4>
            <ul className="lg:space-y-2 space-y-1 md:space-y-2">
              <FooterLink path={"/"}>Order</FooterLink>
              <FooterLink path={"/"}>Order Status</FooterLink>
              <FooterLink path={"/"}>Deliveries</FooterLink>
              <FooterLink path={"/"}>Wishlist</FooterLink>
              <FooterLink path={"/"}>Search Product</FooterLink>
              <FooterLink path={"/"}>Refund Policy</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FF9D00] text-lg font-bold lg:mb-5 mb-2 font-montserrat lg:mt-5 mt-1 ">
              Special Offers
            </h4>
            <ul className="lg:space-y-2 space-y-1 md:space-y-2">
              <FooterLink path={"/"}>Terms & Condition</FooterLink>
              <FooterLink path={"/"}>Terms of Service</FooterLink>
              <FooterLink path={"/"}>Privacy Policy</FooterLink>
              <FooterLink path={"/"}>Shipping Information</FooterLink>
              <FooterLink path={"/"}>Returns & Exchanges</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-b my-10 border-gray-800 w-full  "></div>

        <div className="container mx-auto text-gray-300 text-sm md:flex justify-between items-center">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} munshi-multispare Online Platform
          </p>
          <div className="flex md:justify-end items-center">
            <p className="hidden lg:flex">We Accepted</p>
            <img
              className="w-80 mx-auto"
              src="https://i.ibb.co/QNttYCj/caed1-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </footer>
    </>
  );
}
