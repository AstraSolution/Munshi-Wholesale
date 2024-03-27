import { FaTelegramPlane, FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaLocationCrosshairs } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import Map from "../../components/Map/Map";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n73ougm",
        "template_58zam7o",
        form.current,
        "Y9qRu_eDhWpdurzLL"
      )
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Feedback Successfully submitted",
          showConfirmButton: false,
          timer: 1500,
        });
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <>
      <div className="max-w-7xl mx-auto bg-white my-6 text-[#011c2b]">
        <div className="text-center px-6">
          <h2 className="text-3xl font-extrabold">Contact Us</h2>
          <p className="text-sm text-gray-400 mt-3">
            Have some big idea or brand to develop and need help?
          </p>
        </div>
        <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-8">
          <div className="bg-[#011c2b] rounded-lg p-6 max-lg:text-center">
            <h2 className="text-xl font-bold text-white">
              Contact Information
            </h2>
            <p className="text-sm text-gray-400 mt-3">
              Have some big idea or brand to develop and need help?
            </p>
            <ul className="mt-8 space-y-10">
              <li className="flex items-center max-lg:justify-center">
                <MdOutlineMailOutline className="text-white" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm ml-3"
                >
                  <h1>info@example.com</h1>
                </a>
              </li>
              <li className="flex items-center max-lg:justify-center">
                <FaPhoneAlt className="text-white" />
                <a
                  href="javascript:void(0)"
                  className="text-white text-sm ml-3"
                >
                  <h1>+158 996 888</h1>
                </a>
              </li>
              <li className="flex items-center max-lg:justify-center">
                <FaLocationCrosshairs className="text-white" />

                <a
                  href="javascript:void(0)"
                  className="text-white text-sm ml-3"
                >
                  <h1>123 Street 256 House</h1>
                </a>
              </li>
            </ul>
            <ul className="flex ml-16 max-lg:justify-center mt-16 space-x-4">
              <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="">
                  <RiFacebookFill className="text-white" />
                </a>
              </li>
              <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <FaLinkedinIn className="text-white" />
                </a>
              </li>
              <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <FaInstagram className="text-white" />
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl lg:col-span-2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Full Name"
                    className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="relative flex items-center">
                  <select
                    className="w-full px-4 py-2 rounded p-2 border-2"
                    name="from_option"
                    required
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Website Feedback">Website Feedback</option>
                  </select>
                </div>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    name="from_number"
                    placeholder="Phone No."
                    className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  />
                  <svg
                    fill="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="relative flex items-center sm:col-span-2">
                  <textarea
                    name="message"
                    placeholder="Write Message"
                    className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="mt-12 flex items-center justify-center lg:mx-auto max-lg:w-full rounded px-4 py-2.5 font-semibold bg-[#011c2b] text-white hover:bg-[#011c2bf3]"
              >
                <FaTelegramPlane className="mx-auto mr-1" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Map></Map>
    </>
  );
};

export default ContactUs;
