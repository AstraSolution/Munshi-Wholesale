import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const MyCart = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const products = [
    {
      id: 1,
      productImg:
        "https://dt-multispare.myshopify.com/cdn/shop/products/shop06_4f673430-26a3-43a2-975c-97a24415829b.jpg?v=1669179083&width=360",
      productTitle: "Woodwork Vacuum Grinding",
      pricePerUnit: 420.0,
      productColor: "Blue",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-2 min-h-screen">
      <div className="my-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Your Shopping Cart
        </h1>
        <p className="font-light py-2">Home / Your Shopping Cart</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        <div className="lg:w-2/3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg md:text-xl lg:text-3xl">Products</h1>
            <button className="hover:text-red-500 rounded-lg transition-all duration-300 mr-10">
              <span className="flex items-center gap-3">
                <TrashIcon className="size-5" />{" "}
                <span className="text-xl">Remove All</span>
              </span>
            </button>
          </div>

          <div className="mt-5">
            {products.map((product) => (
              <div key={product.id} className="pb-2 flex gap-3 border-b">
                <img src={product.productImg} alt="" className="size-64" />

                <div className="space-y-2">
                  <h2 className="text-xl lg:text-4xl font-bold">
                    Woodwork Vacuum Grinding
                  </h2>

                  <p>${product.pricePerUnit} per unit</p>
                  <p>15 x 10 x 7 cm</p>

                  <p>Blue</p>

                  <div className="flex items-center">
                    <button
                      className="border py-1 px-3"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                    <p className="border py-1 px-3">{quantity}</p>
                    <button
                      className="border py-1 px-3"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                  </div>
                  <p>Total Quantity: {quantity}</p>

                  <div className="flex justify-between items-center my-2">
                    <p>
                      Total Price: $
                      {(product.pricePerUnit * quantity).toFixed(2)}
                    </p>
                    <button className="hover:text-red-500 rounded-lg transition-all duration-300">
                      <span className="flex items-center gap-3">
                        <TrashIcon className="size-5" />{" "}
                        <span className="text-xl">Remove</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3">
          <h1 className="text-lg md:text-xl lg:text-3xl">Order Summary</h1>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
