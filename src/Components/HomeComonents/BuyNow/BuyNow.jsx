import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import useAllProduct from "../../../Hooks/useAllProduct";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const BuyNow = () => {
  const { products } = useAllProduct();

  return (
    <div className="px-10 my-20">
      <h2 className="text-4xl font-bold montserrat text-center mb-16">
        Buy Now
      </h2>
      <Swiper
        modules={Pagination}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product?._id}>
            <ProductCard currentProduct={product}></ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BuyNow;
