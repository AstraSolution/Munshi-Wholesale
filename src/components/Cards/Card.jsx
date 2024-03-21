import PropTypes from "prop-types";
import "./card.css";

const Card = ({ product }) => {
  console.log(product);

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
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
