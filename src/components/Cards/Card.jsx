import PropTypes from "prop-types";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
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
              <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded z-10">
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
