// React icons
import { FaRegHeart } from "react-icons/fa";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";

// React responsive carousal
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Table.css";
import { useParams } from "react-router-dom";
import useGetaProduct from "../../Hooks/useGetaProduct";
import SectionBanner from "../../Components/Shared/SectionBanner/SectionBanner";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useGetMyCarts from "../../Hooks/useGetMyCarts";

const ProductDetails = () => {


  const { id  } = useParams();
  const axiosPublic = useAxiosPublic();
  const product = useGetaProduct(id);
  const { user } = useAuth();
  const { refetch } = useGetMyCarts();
  const { title, image, price, offer, color, dimensions, quantity } = product;
  const email = user?.email;

  // Handle add to cart
  const handleAddToCart = () => {
    let countDis = price;
    if (offer?.discount !== "N/A") {
      countDis = (price - (price * parseInt(offer?.discount)) / 100).toFixed(2);
    }

    const addCart = {
      customer_name: user?.displayName,
      customer_email: user?.email,
      product_id: id,
      unit_price: countDis,
      total_price: countDis,
      quantity: 1,
      product_image: image,
      stock_limit: quantity,
      title: title,
      dimensions: dimensions,
      color: color,
    };

    axiosPublic
      .post(`/myCarts/${email}`, addCart)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product add to cart successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "This product already exist your carts!!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <SectionBanner
        title={"Product Details"}
        subTitle={`Shop / Products / ${product?.title}`}
      ></SectionBanner>
      <div className="container mx-auto my-10 px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row">
          {/* First half */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="text-center w-full md:max-w-lg">
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
          </div>

          {/* Second half */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold">{product?.title}</h2>

            <hr className="my-3" />

            <h2 className="text-yellow-500 text-2xl font-medium my-1">
              $ {product?.price}
              <span className="pl-1 text-xs text-black">(Tax included)</span>
            </h2>
            <h2
              className={`${
                product?.quantity > 0 ? "text-green-500" : "text-red-500"
              } `}
            >
              {product?.quantity > 0
                ? `In Stock (${product?.quantity})`
                : "Stock out"}
            </h2>

            {/* Color */}
            <div className="flex items-center gap-5 mt-3">
              <h3 className="text-lg font-semibold">Color</h3>
              <div className="flex items-center gap-4">
                {product?.color?.map((color) => (
                  <label
                    key={color}
                    className="border-2 border-gray-400 rounded-full py-1 px-3 text-sm flex items-center"
                  >
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      className="mr-1 text-start"
                    />
                    {color}
                  </label>
                ))}
              </div>
            </div>

            <hr className="my-3" />

            <p className="text-gray-500 mb-3">{product?.description}</p>
            <table>
              <thead>
                <tr>
                  <th className="text-center">No</th>
                  <th>Name</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {/* 1 */}
                <tr>
                  <td className="text-center">1</td>
                  <td>Brand</td>
                  <td>{product?.brand}</td>
                </tr>
                {/* 2 */}
                <tr>
                  <td className="text-center">2</td>
                  <td>Model</td>
                  <td>{product?.model}</td>
                </tr>
                {/* 3 */}
                <tr>
                  <td className="text-center">3</td>
                  <td>Material</td>
                  <td>{product?.material}</td>
                </tr>
                {/* 4 */}
                <tr>
                  <td className="text-center">4</td>
                  <td>Weight</td>
                  <td>{product?.weight} gm</td>
                </tr>
                {/* 5 */}
                <tr>
                  <td className="text-center">5</td>
                  <td>Country of Origin</td>
                  <td>{product?.country_of_origin}</td>
                </tr>
                {/* 6 */}
                <tr>
                  <td className="text-center">6</td>
                  <td>Manufacturer</td>
                  <td>{product?.manufacturer}</td>
                </tr>
              </tbody>
            </table>

            <hr className="my-3" />

            <div className="flex flex-row gap-5 my-5">
              <button
                onClick={() => handleAddToCart(product?._id)}
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

            <hr className="my-3" />

            <div
              className={
                product?.return_available
                  ? "border-2 border-gray-100 p-3 flex items-center gap-4"
                  : "hidden"
              }
            >
              <FaArrowRightArrowLeft />
              <p>{product?.return_policy}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
