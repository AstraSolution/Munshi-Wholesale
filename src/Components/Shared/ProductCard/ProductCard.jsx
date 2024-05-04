import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ currentProduct }) => {
  const { _id, title, image, price } = currentProduct;
  const [isWished, setIsWished] = useState(false);
  const navigate = useNavigate();

  // console.log(isWished);
  // console.log(currentProduct);

  return (
    <div>
      <div className="relative flex items-center rounded-lg shadow-md h-[250px] lg:h-[350px] group border-2 border-gray-200">
        <div
          className="mx-auto"
          onClick={() => navigate(`/products/${_id}`, { id: `${_id}` })}
        >
          <img
            src={image[0]}
            alt={title}
            className="rounded-lg p-3 max-h-[250px] lg:max-h-[350px]"
          />
        </div>
        <div className="w-full hidden group-hover:flex justify-center gap-10 absolute bottom-5 z-10">
          <button>
            <FaShoppingCart className="text-2xl text-black" />
          </button>
          <button onClick={() => setIsWished(!isWished)}>
            <FaHeart
              className={`text-2xl ${isWished ? "text-red-500" : "text-black"}`}
            />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl montserrat">{title}</h2>
        <p className="text-base lg:text-lg my-3 text-black montserrat">
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline" />
        </p>
        <div className="flex items-center gap-10">
          <p className="text-xl lg:text-3xl font-bold">$ {price}</p>
          <p className="text-lg lg:text-2xl line-through">$840.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  currentProduct: PropTypes.object,
};
