import { FaRegHeart } from "react-icons/fa";
import {
  MdOutlineModeEdit,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FaPlus, FaMinus, FaArrowRightArrowLeft } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Table.css";
import { useState } from "react";

const product = {
  color: ["red", "blue", "black"],
  quantity: "10",
  return_available: true,
  return_policy: "This item is returnable.",
  image: [
    "https://i.ibb.co/bX755vX/4.png",
    "https://i.ibb.co/ZVKn9Wm/3.png",
    "https://i.ibb.co/ZVKn9Wm/3.png",
    "https://i.ibb.co/PzCgYVW/1.png",
  ],
};

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* First half */}
          <div className="w-full md:w-1/2 flex flex-col items-center p-10">
            <div className="text-center">
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
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-xl font-semibold">Gardening Tools</h2>

            <div className="flex gap-2 items-center text-yellow-400 my-2">
              {/* <Rating
                unratedColor="amber"
                ratedColor="amber"
                readonly
                value={5}
              />
              <h2 className="text-gray-500 mx-5">
                {reviewsLength !== 0 ? `${reviewsLength} ` : "0 "}
                Reviews
              </h2> */}

              {/* Modal */}
              <button
                className="text-gray-600 p-2"
                // onClick={handleOpen}
                // variant="gradient"
                // color="white"
              >
                <MdOutlineModeEdit className="inline mr-1" /> Write a Review
              </button>

              {/* <Dialog open={open} size="md" handler={handleOpen}>
                <DialogHeader className="justify-center">
                  Tell us about the product
                </DialogHeader>
                <DialogBody>
                  <div className="mb-3 text-center">
                    <Rating
                      unratedColor="amber"
                      ratedColor="amber"
                      id="rating"
                    //   onChange={(value) => setRating(value)}
                    />
                  </div>
                  <Textarea label="Message" id="message" />
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    // onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button
                    variant="gradient"
                    color="green"
                    // onClick={handleRating}
                  >
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog> */}
            </div>

            <hr className="my-5" />

            {/* Color */}
            <div className="flex items-center gap-10">
              <h3>Color</h3>
              <div className="flex items-center gap-4">
                {product?.color?.map((color) => (
                  <label key={color}>
                    <input type="radio" name="color" value={color} />
                    {color}
                  </label>
                ))}
              </div>
            </div>
            <h2 className="text-yellow-500 text-xl font-medium my-1">
              $ 440.00
              <span className="text-xs text-black">(Tax included)</span>
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

            <hr className="my-5" />

            <p className="text-gray-500 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              quas voluptatum aliquid voluptas quaerat animi, nostrum fugiat
              modi sunt nemo fugit laborum deleniti necessitatibus, cum quam
              magni atque similique minus pariatur, ipsum voluptates
              reprehenderit dignissimos. Ipsam at quibusdam, aspernatur maxime
              nam illo? Aliquid assumenda ut sit suscipit obcaecati a impedit!
            </p>
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
                  <td>Dewalt</td>
                </tr>
                {/* 2 */}
                <tr>
                  <td className="text-center">2</td>
                  <td>Model</td>
                  <td>MD-024</td>
                </tr>
                {/* 3 */}
                <tr>
                  <td className="text-center">3</td>
                  <td>Material</td>
                  <td>Plastic</td>
                </tr>
                {/* 4 */}
                <tr>
                  <td className="text-center">4</td>
                  <td>Weight</td>
                  <td>250 gm</td>
                </tr>
                {/* 5 */}
                <tr>
                  <td className="text-center">5</td>
                  <td>Country of Origin</td>
                  <td>Bangladesh</td>
                </tr>
                {/* 6 */}
                <tr>
                  <td className="text-center">6</td>
                  <td>Manufacturer</td>
                  <td>China</td>
                </tr>
              </tbody>
            </table>

            <hr className="my-5" />

            <div className="flex md:flex-col lg:flex-row md:items-start lg:items-center gap-5 my-5">
              <div className="flex items-center gap-3">
                <h3>Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                    className="border-2 border-black p-2"
                  >
                    <FaMinus />
                  </button>
                  <p className="mx-3">{quantity}</p>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="border-2 border-black p-2"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <button
                // onClick={() => handleAddToCart(product?._id)}
                className="bg-yellow-400 md:p-2 lg:py-2 lg:px-5 flex items-center gap-2"
              >
                <RiShoppingBag2Line className="text-xl" /> Add to cart
              </button>
            </div>
            <button
              className="text-gray-500 flex items-center gap-2"
              //   onClick={() => handleAddToWishlist(product?._id)}
            >
              <FaRegHeart />
              {/* className={`${favorite ? "text-red-500" : ""} `} */}
              Add to Wishlist
            </button>

            <hr className="my-5" />

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

        {/* Reviews */}
        {/* <Review id={param?.id} setReviewLength={setReviewLength}></Review> */}
      </div>
    </div>
  );
};

export default ProductDetails;
