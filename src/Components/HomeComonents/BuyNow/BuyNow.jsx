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

  const { data: products = [] , isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featured-products");
      return res.data;
    },
  });

if (isLoading) {
  return (
    <div>loading ...</div>
  )
}

  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold montserrat text-center mb-10">
        Buy Now
      </h2>
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
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
      >
        {products?.products?.map((product) => (
          <SwiperSlide key={product?._id}>
            <ProductCard currentProduct={product}></ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BuyNow;
