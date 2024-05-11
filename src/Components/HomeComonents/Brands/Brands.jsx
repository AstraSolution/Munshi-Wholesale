import useAllBrand from "../../../Hooks/useAllBrand";
import Slider from "react-slick";

export default function Brands() {
  const { brands } = useAllBrand();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <h3 className="text-red-600 text-2xl font-semibold pb-6">
        Shop By Brands
      </h3>
      <Slider {...settings} className="">
        {brands?.map((brand) => (
          <div
            key={brand?._id}
            className="p-5 rounded-md shadow-md text-center space-y-2"
          >
            <img
              className="w-12 mx-auto"
              src={brand?.brandImage}
              alt={brand?.brandName}
            />
            <h4 className="text-lg font-semibold">{brand?.brandName}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}
