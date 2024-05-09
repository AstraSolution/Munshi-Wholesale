import React from "react";
import useAllBrand from "../../../Hooks/useAllBrand";
import Slider from "react-slick";

export default function Brands() {
  const { brands } = useAllBrand();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <Slider
        {...settings}
        className=""
      >
        {brands?.map((brand) => (
          <div
            key={brand._id}
            className="p-5 rounded-md shadow-md text-center space-y-2"
          >
            <img className="w-12 mx-auto" src={brand.brandImage} alt="" />
            <h4 className="text-lg font-semibold">{brand.brandName}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}
