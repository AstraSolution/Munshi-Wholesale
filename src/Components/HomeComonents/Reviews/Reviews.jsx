import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const reviews = [
  {
    clientReview:
      "Smooth transactions every time. Munshi Wholesale has a wide range of products at competitive prices. Highly recommend.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "JaneSmith",
  },
  {
    clientReview:
      "Great website for buying and selling hardware products. Easy to navigate and find what I need. Will definitely use again!",
    starRating: 5,
    userProfile: "https://i.ibb.co/GTDXjSZ/p2.jpg",
    userName: "JohnDoe",
  },
  {
    clientReview:
      "Excellent customer service and fast shipping. Found exactly what I was looking for. Will be a repeat customer.",
    starRating: 5,
    userProfile: "https://i.ibb.co/DzWg2g3/p4.jpg",
    userName: "MikeJohnson",
  },
  {
    clientReview:
      "Good selection of hardware items. Prices are reasonable. Website interface could be improved for better user experience.",
    starRating: 3,
    userProfile: "https://i.ibb.co/CV7W2Hj/p1.jpg",
    userName: "SarahBrown",
  },
  {
    clientReview:
      "Munshi Wholesale offers great deals on bulk purchases. Saved me a lot of money for my business.",
    starRating: 4,
    userProfile: "https://i.ibb.co/7n1MXk9/p7.jpg",
    userName: "DavidClark",
  },
  {
    clientReview:
      "The website layout is clean and easy to use. However, some product descriptions lack detail. Overall satisfied with my purchase.",
    starRating: 4,
    userProfile: "https://i.ibb.co/XD5VbFK/p6.jpg",
    userName: "EmilyTaylor",
  },
  {
    clientReview:
      "Had an issue with an order, but customer service was quick to resolve it. Appreciate the prompt response.",
    starRating: 4,
    userProfile: "https://i.ibb.co/6N976yz/p9.jpg",
    userName: "ChrisWilson",
  },
  {
    clientReview:
      "Munshi Wholesale has become my go-to for hardware needs. Reliable service and quality products.",
    starRating: 5,
    userProfile: " https://i.ibb.co/pfs4dq2/p8.jpg",
    userName: "JenniferLee",
  },
];

export default function Reviews() {
  return (
    <div className="py-14 px-10 md:px-0 max-w-[600px] mx-auto">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.clientReview} className="text-center py-10">
            <img
              className="w-10 h-10 rounded-full mx-auto"
              src={review.userProfile}
              alt=""
            />
            <h3 className="font-semibold text-red-600 text-lg py-1">
              {review.userName}
            </h3>
            <span className="flex justify-center">
              <Rating
                style={{ maxWidth: 100 }}
                value={review?.starRating}
                readOnly
              />
            </span>
            <p className="pt-8">{review.clientReview}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
