import PropTypes from "prop-types";
import "./card.css";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const Card = ({ product }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();


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

  return (
    <div className="center">
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
