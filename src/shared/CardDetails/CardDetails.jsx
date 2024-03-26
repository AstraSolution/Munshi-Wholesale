import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import { useParams } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaPlus, FaMinus, FaArrowRightArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { RiShoppingBag2Line } from "react-icons/ri";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./Table.css";
import toast from "react-hot-toast";
import useAuth from "../../hooks/auth/useAuth";

const CardDetails = () => {
  const axiosPublic = useAxiosPublic();
  const param = useParams();
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const [ favorite, setFavorite] = useState(false)

  const { data: product = {} } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${param?.id}`);
      return res.data;
    },
  });


  useEffect(() => {
        // Check if the product is already in the wishlist    
        const wishlists = JSON.parse(localStorage.getItem("wishlist")) || [];
        for (const item of wishlists) {
          if (item.product_id === param?.id) {
            setFavorite(true)
            break;
          }
        }
  }, [param]);


  // handel add to cart function
  const handleAddToCart = async (id) => {
    const images = product?.image || [];
    const cartData = {
      customer_name: user?.displayName || "",
      customer_email: user?.email || "",
      product_id: id,
      unit_price: product?.price,
      total_price: product?.price,
      quantity: 1,
      product_image: [...images],
      stock_limit: product?.quantity,
      title: product?.title,
    };

     // Check if the product is already in the Cart
     let productExistsInCarts = false;
     const carts = JSON.parse(localStorage.getItem("carts")) || [];
     for (const item of carts) {
       if (item.product_id === id) {
         productExistsInCarts = true;
         break;
       }
     }

     if (productExistsInCarts) {
       toast.error(`${product?.title} is already in your Carts`);
       return; // Stop execution if the product already exists
     }

    if (!user) {
      carts.push(cartData);
      localStorage.setItem("carts", JSON.stringify(carts));

      toast.success(`${product?.title} Added to cart`);
    } else {
      const res = await axiosPublic.post("/myCarts", cartData);

      setTimeout(() => {
        toast.success(`${product?.title} Added to cart`);
      }, 1000);
      console.log(res?.data);
    }
  };

  // handel add to cart function
  const handleAddToWishlist = async (id) => {
    const images = product?.image || [];
    const wishlistData = {
      customer_name: user?.displayName || "",
      customer_email: user?.email || "",
      product_id: id,
      unit_price: product?.price,
      total_price: product?.price,
      quantity: 1,
      product_image: [...images],
      stock_limit: product?.quantity,
      title: product?.title,
    };
  
    // Check if the product is already in the wishlist
    const wishlists = JSON.parse(localStorage.getItem("wishlist")) || [];
    const index = wishlists.findIndex(item => item.product_id === id);
  
    if (index !== -1) {
      // Product already exists, remove it from wishlist
      wishlists.splice(index, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlists));
      setFavorite(false); // Toggle favorite state
      toast.success(`${product?.title} removed from wishlist`);
    } else {
      // Product doesn't exist, add it to wishlist
      wishlists.push(wishlistData);
      localStorage.setItem("wishlist", JSON.stringify(wishlists));
      setFavorite(true); // Toggle favorite state
      toast.success(`${product?.title} added to wishlist`);
    }
  
    if (user) {
      try {
        if (index !== -1) {
          // Remove from server wishlist
          await axiosPublic.delete(`/wishlist/${id}`);
        } else {
          // Add to server wishlist
          await axiosPublic.post("/wishlist", wishlistData);
        }
      } catch (error) {
        console.error("Error updating wishlist:", error);
        toast.error("Failed to update wishlist. Please try again later.");
      }
    }
  };
  


  return (
    <div className="container">
      <div className="flex flex-col md:flex-row">
        {/* First half */}
        <div className="w-full md:w-1/2 flex flex-col items-center p-10">
          <div className="mb-10">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-[400px] h-[400px]  mx-auto"
            />
          </div>

          <div className="w-full">
            <Swiper
              modules={[Navigation]}
              spaceBetween={5}
              slidesPerView={4}
              navigation
            >
              {product?.image?.map((image) => (
                <SwiperSlide key={image}>
                  <img
                    src={image}
                    alt={product?.title}
                    className="w-[100px] h-[100px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-xl font-semibold">{product?.title}</h2>
          <div className="flex gap-2 items-center text-yellow-400 my-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <h2 className="text-gray-500 mx-5">
              {product?.product_reviews
                ? `${product?.product_reviews.length} `
                : "0 "}
              Reviews
            </h2>
            <h2 className="text-gray-500">
              <MdOutlineModeEdit className="inline" />
              Write a Review
            </h2>
          </div>
          <hr className="my-5" />
          <h2 className="text-yellow-400 text-xl font-medium">
            $ {product?.price}
          </h2>
          <h2>Tax included</h2>
          <hr className="my-5" />
          <p className="text-gray-500">{product?.description}</p>

          {/* Color */}
          <div className="flex items-center gap-10 my-4">
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

          {/* Specification Table  */}
          {/* <h2 className="font-semibold mb-2">Specification</h2> */}

          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* 1 */}
              <tr>
                <td>1</td>
                <td>Brand</td>
                <td>{product?.brand}</td>
              </tr>
              {/* 2 */}
              <tr>
                <td>2</td>
                <td>Model</td>
                <td>{product?.model}</td>
              </tr>
              {/* 3 */}
              <tr>
                <td>3</td>
                <td>Material</td>
                <td>{product?.material}</td>
              </tr>
              {/* 4 */}
              <tr>
                <td>4</td>
                <td>Weight</td>
                <td>{product?.weight}</td>
              </tr>
              {/* 5 */}
              <tr>
                <td>5</td>
                <td>Country of Origin</td>
                <td>{product?.country_of_origin}</td>
              </tr>
              {/* 6 */}
              <tr>
                <td>6</td>
                <td>Manufacturer</td>
                <td>{product?.manufacturer}</td>
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
              onClick={() => handleAddToCart(product?._id)}
              className="bg-yellow-400 md:p-2 lg:py-2 lg:px-5 flex items-center gap-2"
            >
              <RiShoppingBag2Line className="text-xl" /> Add to cart
            </button>
          </div>
          <button
            onClick={() => handleAddToWishlist(product?._id)}
            className="text-gray-500 flex items-center gap-2"
          >
            <FaRegHeart className={`${favorite ? 'text-red-500' : ""} `}/>
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
    </div>
  );
};

export default CardDetails;
