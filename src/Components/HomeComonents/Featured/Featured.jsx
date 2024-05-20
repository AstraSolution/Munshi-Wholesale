import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
// React icons
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import { Carousel } from "react-responsive-carousel";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Featured.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProvider";
import useCurrentUser from "../../../Hooks/useCurrentUser";
import useGetMyCarts from "../../../Hooks/useGetMyCarts";
import useWishlistProducts from "../../../Hooks/useWishlistProducts";

const Featured = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();
  const { refetchMyCarts } = useGetMyCarts();
  const { refetchWishlist } = useWishlistProducts()

  const { data: featuredProducts = [] } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featured-products");
      return res.data;
    },
  });

  // HandleCart
  const handleCart = (product) => {
    if (user === null) {
      navigate("/login");
    } else {
      let countDis = product?.price;

      if (product?.offer?.discount !== "N/A") {
        countDis = (
          product?.price -
          (product?.price * parseInt(product?.offer?.discount)) / 100
        ).toFixed(2);
      }

      const addCart = {
        customer_name: currentUser?.fullName,
        customer_email: currentUser?.email,
        product_id: product?._id,
        unit_price: countDis,
        total_price: countDis,
        quantity: 1,
        product_image: product?.image,
        stock_limit: product?.quantity,
        title: product?.title,
        dimensions: product?.dimensions,
        color: product?.color,
      };

      axiosPublic
        .post(`/myCarts/${currentUser?.email}`, addCart)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product add to cart successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            refetchMyCarts()

          } else if (response.data.insertedId === null) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Product already in cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${error.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  // Handle wishlist
  const handleWishlist = (product) => {
    if (user === null) {
      navigate("/login");
    } else {
      let countDis = product?.price;
      if (product?.offer?.discount !== "N/A") {
        countDis = (
          product?.price -
          (product?.price * parseInt(product?.offer?.discount)) / 100
        ).toFixed(2);
      }

      const addWishlist = {
        customer_name: currentUser?.fullName,
        customer_email: currentUser?.email,
        product_id: product?._id,
        unit_price: countDis,
        total_price: countDis,
        quantity: 1,
        product_image: product?.image,
        stock_limit: product?.quantity,
        title: product?.title,
        dimensions: product?.dimensions,
        color: product?.color,
      };

      axiosPublic
        .post(`/wishlist/${currentUser?.email}`, addWishlist)
        .then((response) => {
          console.log(response);
          if (response) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product add wishlist successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            refetchWishlist()
          }
        })
        .catch((error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${error.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  return (
    <div className="my-20">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-4xl font-bold montserrat text-center mb-3">
          Featured
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="12"
          fill="#fdc62e"
          version="1.1"
          viewBox="0 139.474 290.658 11.711"
          xmlSpace="preserve"
        >
          <path fill="#fdc62e" d="M0 139.474H290.658V151.185H0z"></path>
        </svg>
      </div>

      <Swiper
        modules={Pagination}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {featuredProducts?.map((product) => (
          <SwiperSlide key={product?._id}>
            <div className="flex flex-col md:flex-row gap-5 rounded-lg p-5 border-2 border-gray-200">
              <div className="text-center w-full md:w-1/2 h-[450px]">
                <Carousel
                  emulateTouch={true}
                  showIndicators={false}
                  showStatus={false}
                  renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                      <div
                        className={`${
                          hasPrev ? "absolute" : "hidden"
                        } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                      >
                        <MdOutlineKeyboardDoubleArrowLeft className="w-9 h-9" />
                      </div>
                    );
                  }}
                  renderArrowNext={(clickHandler, hasNext) => {
                    return (
                      <div
                        className={`${
                          hasNext ? "absolute" : "hidden"
                        } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                      >
                        <MdOutlineKeyboardDoubleArrowRight className="w-9 h-9" />
                      </div>
                    );
                  }}
                >
                  {product?.image?.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt="tools" />
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold flex-wrap">
                  {product?.title}
                </h2>

                <p className="text-gray-500 my-5">{product?.description}</p>

                <h2 className="text-3xl font-bold my-1">$ {product?.price}</h2>

                <div className="flex flex-col gap-3 my-5">
                  <button
                    onClick={() => handleCart(product)}
                    className="bg-yellow-400 p-2 lg:px-5 flex items-center gap-2"
                  >
                    <RiShoppingBag2Line className="text-xl" /> Add to cart
                  </button>
                  <button
                    className="text-gray-500 p-2 lg:px-5 flex items-center gap-2 border-2 border-yellow-400"
                    onClick={() => handleWishlist(product)}
                  >
                    <FaRegHeart />
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
