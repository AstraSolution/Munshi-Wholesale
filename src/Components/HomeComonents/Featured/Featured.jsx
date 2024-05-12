import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
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

const Featured = () => {
  const axiosPublic = useAxiosPublic();

  const { data: FeaturedProducts = [] } = useQuery({
    queryKey: ["FeaturedProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featured-products");
      return res.data;
    },
  });

  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold montserrat text-center mb-10">
        Featured
      </h2>

      <Swiper
        modules={Pagination}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {FeaturedProducts?.map((product) => (
          <SwiperSlide key={product?._id}>
            <div className="flex flex-col md:flex-row gap-10 rounded-lg p-5 border-2 border-gray-200">
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
                    //   onClick={() => handleAddToCart(product?._id)}
                    className="bg-yellow-400 p-2 lg:px-5 flex items-center gap-2"
                  >
                    <RiShoppingBag2Line className="text-xl" /> Add to cart
                  </button>
                  <button
                    className="text-gray-500 p-2 lg:px-5 flex items-center gap-2 border-2 border-yellow-400"
                    //   onClick={() => handleAddToWishlist(product?._id)}
                  >
                    <FaRegHeart />
                    {/* className={`${favorite ? "text-red-500" : ""} `} */}
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
