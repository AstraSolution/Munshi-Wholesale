import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div>
      <div
        className="rounded-lg shadow-sm relative h-[200px] lg:h-[400px] group"
        style={{
          backgroundImage: "url('https://i.ibb.co/9yKTfmn/shop02-1-1.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "15px",
        }}
      >
        <div className="w-full hidden group-hover:flex justify-center gap-10 absolute bottom-10">
          <button>
            <FaShoppingCart className="text-2xl text-white" />
          </button>
          <button>
            <FaHeart className="text-2xl text-white" />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl lg:text-2xl montserrat">
          Woodwork Vacuum Grinding
        </h2>
        <p className="text-base lg:text-lg my-3 text-black montserrat">
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline mr-2" />
          <FaStar className="inline" />
        </p>
        <div className="flex items-center gap-10">
          <p className="text-xl lg:text-3xl font-bold">$440.00</p>
          <p className="text-lg lg:text-2xl line-through">$840.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
