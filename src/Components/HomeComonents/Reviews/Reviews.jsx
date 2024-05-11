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
      "Great website for buying and selling hardware products. Easy to navigate and find what I need. Will definitely use again!",
    starRating: 5,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "JohnDoe",
  },
  {
    clientReview:
      "Smooth transactions every time. Munshi Wholesale has a wide range of products at competitive prices. Highly recommend.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "JaneSmith",
  },
  {
    clientReview:
      "Excellent customer service and fast shipping. Found exactly what I was looking for. Will be a repeat customer.",
    starRating: 5,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "MikeJohnson",
  },
  {
    clientReview:
      "Good selection of hardware items. Prices are reasonable. Website interface could be improved for better user experience.",
    starRating: 3,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "SarahBrown",
  },
  {
    clientReview:
      "Munshi Wholesale offers great deals on bulk purchases. Saved me a lot of money for my business.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "DavidClark",
  },
  {
    clientReview:
      "The website layout is clean and easy to use. However, some product descriptions lack detail. Overall satisfied with my purchase.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "EmilyTaylor",
  },
  {
    clientReview:
      "Had an issue with an order, but customer service was quick to resolve it. Appreciate the prompt response.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "ChrisWilson",
  },
  {
    clientReview:
      "Munshi Wholesale has become my go-to for hardware needs. Reliable service and quality products.",
    starRating: 5,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "JenniferLee",
  },
  {
    clientReview:
      "Average experience overall. Prices are decent, but shipping took longer than expected.",
    starRating: 3,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "KevinNguyen",
  },
  {
    clientReview:
      "Impressive selection of hardware items. Prices are competitive. Will recommend to friends.",
    starRating: 5,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "AmandaGarcia",
  },
  {
    clientReview:
      "User-friendly website. Found what I needed quickly and checkout was smooth. Will shop again.",
    starRating: 5,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "DanielMartinez",
  },
  {
    clientReview:
      "Decent prices, but could use more variety in product offerings. Overall satisfied with my purchase.",
    starRating: 3,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "MelissaWong",
  },
  {
    clientReview:
      "Love the convenience of shopping at Munshi Wholesale. Always find what I need at a good price.",
    starRating: 5,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "RyanJohnson",
  },
  {
    clientReview:
      "Website is easy to use, but could benefit from more filtering options. Products arrived as described.",
    starRating: 4,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "LauraDavis",
  },
  {
    clientReview:
      "Great experience overall. Will definitely recommend to colleagues. Keep up the good work!",
    starRating: 5,
    userProfile: "https://i.ibb.co/W5Wn9R9/Stephen-King.jpg",
    userName: "MarkThompson",
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
              className="w-10 rounded-full mx-auto"
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
