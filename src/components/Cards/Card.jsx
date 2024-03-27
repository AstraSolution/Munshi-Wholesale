import PropTypes from "prop-types";
import "./card.css";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import {  useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useMyCarts from "../../hooks/carts/useMyCarts";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useWishList from "../../hooks/wishlist/useWishlist";
import useAuth from "../../hooks/auth/useAuth";
import { isAllOf } from "@reduxjs/toolkit";

const Card = ({ product }) => {
  const { user } = useAuth()
  const { refetch } = useMyCarts();
  const axiosPublic = useAxiosPublic();
  const { _id } = product || [];
  const [favorite, setFavorite] = useState(false);

  console.log(favorite);
  const { wishListProduct, isLoading, WishlistReFetech } = useWishList();
  console.log(wishListProduct);

  if(isLoading){
    return <div>Loading...</div>
  }

  const filteredData = wishListProduct?.filter((product) => product.product_id === _id);
  console.log(filteredData);

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
      refetch();
      setTimeout(() => {
        toast.success(`${product?.title} Added to cart`);
      }, 1000);
      console.log(res?.data);
    }
  };

  const handleAddToWishlist = async () => {
    const images = product?.image || [];
    const color = product?.color || [];
    const product_id = product._id || [];
    const wishlistData = {
      customer_name: user?.displayName || "",
      customer_email: user?.email || "",
      product_id,
      // product_id: id,
      unit_price: product?.price,
      total_price: product?.price,
      quantity: 1,
      product_image: [...images],
      stock_limit: product?.quantity,
      title: product?.title,
      color: [...color],
      dimensions: product?.dimensions,
    };
   

    //   // Check if the product is already in the wishlist
    const wishlists = JSON.parse(localStorage.getItem("wishlist")) || [];
    const index = wishlists.findIndex((item) => item.product_id === _id);
    
    if(user){
      const res = await axiosPublic.post("/wishlist", wishlistData);
      return res.data
    } 
    else {
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
    }
   
  };

  // delete operation
  const handleDeleteProduct = () => {
    console.log(filteredData[0]._id);
    axiosPublic
      .delete(`/wishlist/${filteredData[0]._id}`)
      .then((response) => {
        console.log(response.data);
        console.log("delete");
        WishlistReFetech();
        toast.error("wish list Remove successfull");
      })
      .catch((error) => {
        console.error("Error removing item from wishlist:", error);
      });
  };

  return (
    <div className="center">
      <div>
        {filteredData?.length > 0 ? (
          <button
            onClick={handleDeleteProduct}
            className="  text-red-700 text-center text-xl border mb-6 border-gray-600 border-opacity-30 backdrop-blur-md p-3 bg-black/30 rounded-full"
          >
            <FaHeart />
          </button>
        ) : (
          filteredData?.length === 0 && (
            <div>
              <button
                onClick={handleAddToWishlist}
                className=" text-white text-center text-xl border mb-6 border-gray-600 border-opacity-30 backdrop-blur-md p-3 bg-black/30 rounded-full"
              >
                <FaRegHeart />
              </button>
            </div>
          )
        )}
      </div>

      <div className="container-card">
        <div className="card">
          <div className="imgBx">
            <img src={product?.image} alt={product?.title} />
          </div>
          <div className="contentBx">
            <h2 className="text-white text-center -mt-6">{product?.title}</h2>
            <h2 className="text-white text-center -mt-1">$ {product?.price}</h2>

            <div className="flex justify-evenly mt-2">
              <button
                onClick={() => handleAddToCart(product._id)}
                className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
              <Link to={`product/${product?._id}`}>
                <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded z-10">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
