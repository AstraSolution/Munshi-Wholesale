// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import required modules
import { Grid } from "swiper/modules";
import useAllBrand from "../../../Hooks/useAllBrand";
import { Link } from "react-router-dom";

export default function Brands() {
  const { brands } = useAllBrand();
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-4xl font-bold montserrat text-center mb-3">
        Shop by Brands
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
        spaceBetween={15}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        modules={[Grid]}
        className="mySwiper"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand?._id}>
            <Link state={{ value: brand?.brandName, type: "brand" }} to="/shop">
              <div className="border p-5 rounded-lg shadow-md">
                <img className="w-14 mx-auto" src={brand?.brandImage} alt="" />
                <p className="text-red-600 text-center font-semibold text-sm md:text-md lg:text-lg pt-2">
                  {brand?.brandName}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
