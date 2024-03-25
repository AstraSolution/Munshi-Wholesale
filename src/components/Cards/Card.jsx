import PropTypes from "prop-types";
import "./card.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import { Toaster, toast } from "react-hot-toast";

const Card = ({ product }) => {
  console.log(product);
  const { user } = useContext(AuthContext)
  const userEmail = user?.email
  console.log(userEmail);
  const axiosPublic = useAxiosPublic();

  const { _id, title, price, warranty, weight, image, features, color, brand, category, availability } = product || {};



  const handleAddToWishlist = () => {

    const wishlistData = {
      userEmail,
      product_id: _id,
      title,
      price,
      warranty,
      weight,
      image,
      features,
      color,
      category,
      availability,
      brand,
    };
    
    console.log(wishlistData);
    // add operation
    axiosPublic
      .post("/wishlist", wishlistData)
      .then((response) => {
        console.log(response.data);

        if (response.status === 200) {
          toast.success('Item added to wishlist successfully!');
          refetch();
        } else {
          toast.error('Failed to add item to wishlist.');
        }
      })
      .catch((error) => {
        console.error("Error adding to wishlist:", error);
        toast.error('Failed to add item to wishlist.');
      });
  };




  return (
    <div className="center">
      <div className="container-card">

        <div className="card">
          <div className="imgBx">
            <img src={product?.image} alt={product?.title} />

          </div>

          <div className="contentBx">
            <div>
              <h2 className="text-white text-center ">{product?.title}</h2>
              <h2 className="text-white text-center -mt-1">
                $ {product?.price}
              </h2>
            </div>

            <div className="flex justify-evenly mt-2">
              <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>

          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleAddToWishlist}
          className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Add to Wishlist
        </button>

      </div>
      <Toaster />
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
