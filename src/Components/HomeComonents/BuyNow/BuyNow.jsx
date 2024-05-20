import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import ProductCard from "../../Shared/ProductCard/ProductCard";

const BuyNow = () => {
  const axiosPublic = useAxiosPublic();

  const { data: buyNow = [], isLoading } = useQuery({
    queryKey: ["buyNow"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featured-products");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <div className="my-20">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-4xl font-bold montserrat text-center mb-3">
          Buy Now
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
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
      >
        {buyNow?.map((product) => (
          <SwiperSlide key={product?._id}>
            <ProductCard currentProduct={product}></ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BuyNow;
