import PropTypes from "prop-types";
import "./card.css";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Card = ({ product }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
 
//   const CartsSchema = new mongoose.Schema({
//     customer_name: {
//        type: String,
//        required: true
//     },
//     customer_email: {
//         type: String,
//         required: true
//     },
//     owner_email: {
//         type: String,
//         required: true
//     },
//      product_id: {
//         type: String,
//         required: true
//     },
//     unit_price: {
//         type: Number,
//         required: true
//     },
//     total_price: {
//         type: Number,
//         required: true
//     },
//     quantity: {
//         type: Number,
//         required: true
//     },
//     product_image: [String],
//     stock_limit: Number,
//     title: String,
// })

  // handel add to cart function
  const handleAddToCart = async(id) => {

    const cartData = {
      customer_name: user?.displayName || "",
      customer_email: user?.email || "",
      product_id: id,
      unit_price: product?.price,
      total_price: product?.price,
      quantity: 1,
      product_image: product?.image[0],
      stock_limit: product?.quantity ,
      title: product?.title
    }

    if(!user){
      localStorage.setItem("carts", cartData)
    } else {
      const res  = await axiosPublic.post("/myCarts", cartData);
      console.log(res?.data);
    }
  }

  return (
    <div className="center">
      <div className="container-card">
        <div className="card">
          <div className="imgBx">
            <img src={product?.image} alt={product?.title} />
          </div>
          <div className="contentBx">
            <div>
              <h2 className="text-white text-center -mt-6">{product?.title}</h2>
              <h2 className="text-white text-center -mt-1">
                $ {product?.price}
              </h2>
            </div>

            <div className="flex justify-evenly mt-2">
              <button
               onClick={() => handleAddToCart(product._id)}
               className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
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
