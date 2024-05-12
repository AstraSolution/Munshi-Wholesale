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
    <div className="container mx-auto">
      <h2 className=" font-bold text-2xl lg:text-3xl pb-6 text-center">
        Shop by Brands
      </h2>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Grid]}
        className="mySwiper"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand._id}>
            <div className="border p-5 rounded-lg shadow-md">
              <img className="w-14 mx-auto" src={brand.brandImage} alt="" />
              <p className="text-red-600 text-center font-semibold text-sm md:text-md lg:text-lg pt-2">
                <Link to={`/shop/${brand.brandName}`}>{brand.brandName}</Link>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
