import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 pt-8 ">
      <div className="container mx-auto flex flex-wrap justify-between pb-4">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <Link
            to={"#"}
            className="text-xl font-bold mb-4 block text-yellow-400"
          >
            Munshi Wholesale
          </Link>
          <p className="">
            <span className=" text-yellow-300">Adress: </span> Uttara, Dhaka,
            Bangladesh
          </p>
          <p className="">
            <span className=" text-yellow-300">Phone: </span> +880147254000
          </p>
          <p className="">
            <span className=" text-yellow-300">Email: </span>{" "}
            web.munshiwholesale@gmail.com
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 border-x-[.5px] pl-5">
          <h3 className="text-lg font-bold mb-4 text-yellow-400">PRODUCTS</h3>
          <ul className="list-none">
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Prices Drop
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                New Products
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Best Sales
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Sitemap
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Stores
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 border-r-[.5px]  pl-5">
          <h3 className="text-lg font-bold mb-4 text-yellow-400">
            OUR COMPANY
          </h3>
          <ul className="list-none">
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Services
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Delivery
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Search Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 pl-5">
          <h3 className="text-lg font-bold mb-4 text-yellow-400">USFUL LINK</h3>
          <ul className="list-none">
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Order
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Cancellation
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-white my-4 hover:text-yellow-300">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-row md:flex-col-2 lg:flex-col-3 mt-6 md:mt-0 py-4  items-center  justify-between border-t-[1px] border-t-gray-300">
        {/* <div className=" flex gap-2">
          <a href="https://www.facebook.com">
            <FaFacebookF className="text-white text-lg mr-2 hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram className="text-white text-lg mr-2 hover:text-red-400" />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter className="text-white text-lg mr-2 hover:text-gray-500" />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedinIn className="text-white text-lg hover:text-blue-500" />
          </a>
        </div> */}
        <p className="text-sm py-3 md:py-0 lg:py-0">© 2024 Astra Solution</p>
        {/* <div className="flex items-center gap-3">
          We accepted
          <img src="/Public/assets/payment.png" alt="" />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
