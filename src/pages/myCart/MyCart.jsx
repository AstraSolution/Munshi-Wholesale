import { TrashIcon } from "@heroicons/react/24/outline";

const MyCart = () => {
  return (
    <div className="max-w-7xl mx-auto p-2 min-h-screen">
      <div className="my-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Your Shopping Cart
        </h1>
        <p className="font-light py-2">Home / Your Shopping Cart</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 my-5">
        <div className="lg:w-2/3">
          <h1 className="text-lg md:text-xl lg:text-3xl">Products</h1>

          <div className="mt-5">
            <div className="p-4 flex gap-3 border-b">
              <img
                src="https://dt-multispare.myshopify.com/cdn/shop/products/shop06_4f673430-26a3-43a2-975c-97a24415829b.jpg?v=1669179083&width=360"
                alt=""
                className="size-64"
              />

              <div className="space-y-2">
                <h2 className="text-xl lg:text-4xl font-bold">
                  Woodwork Vaccum Grinding
                </h2>

                <p>$452.00</p>
                <p>15 x 10 x 7 cm</p>
                <p>1</p>
                <p>Blue</p>

                <div className="flex items-center gap-1">
                  <button className="py-2 px-3 bg-slate-100 text-xl font-bold rounded-l-lg">
                    +
                  </button>
                  <p className="py-2 px-3 bg-slate-100 text-xl font-bold">1</p>
                  <button className="py-2 px-3 bg-slate-100 text-xl font-bold rounded-r-lg">
                    -
                  </button>
                </div>

                <button className="hover:text-red-500 rounded-lg transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <TrashIcon className="size-5" />{" "}
                    <span className="text-xl">Remove</span>
                  </span>
                </button>
              </div>
            </div>
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
