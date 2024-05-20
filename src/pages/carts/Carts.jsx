
import CartsDetails from "./CartsDetails";
import useGetMyCarts from "../../Hooks/useGetMyCarts";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Carts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  let { myCarts, price, quantity, isPending, refetchMyCarts } = useGetMyCarts();

  if (isPending) {
    return <p className=" min-h-screen text-center my-auto">Loading...</p>;
  }

  const handleCheckout = async () => {
    const email = await user?.email;
    
    const res = await axiosSecure.post(`/order`, { email: email });
    console.log(res?.data);
    if (res?.data?.url) {
      const url = await res.data.url;
      window.open(url, "_blank");
      // router.push(url);
    }
  };

  return (
    <div className="container mx-auto duration-300">
      {myCarts?.length === 0 ? (
        <div className="text-center my-20">
          <p className=" my-10">Your cart is empty.</p>
          <Link
            to={`/buyBooks`}
            className="button-color px-4 py-2 rounded-full text-sm md:text-base text-white"
          >
            Add to Cart
          </Link>
        </div>
      ) : (
        <div className="w-full rounded-2xl overflow-hidden lg:shadow-lg my-5 duration-300">
          <div className= " bg-black text-[#FFA500] duration-300  ">
            <div className="grid grid-cols-6 items-center justify-between font-semibold border border-gray-100 px-10 py-5">
              <h5 className="text-center text-xs md:text-base">Product</h5>
              <h5 className="text-center text-xs md:text-base">Product Name</h5>
              <h5 className="text-center text-xs md:text-base">Unit Price</h5>
              <h5 className="text-center text-xs md:text-base">Quantity</h5>
              <h5 className="text-center text-xs md:text-base">Total</h5>
              <h5 className="text-center text-xs md:text-base">Remove</h5>
            </div>
          </div>
          <div className="flex-1 sm:flex-none grid grid-cols-1 gap-5 lg:gap-0">
            {myCarts?.map((cart) => (
              <CartsDetails
                key={cart._id}
                cart={cart}
                refetchMyCarts={refetchMyCarts}
              ></CartsDetails>
            ))}
            <div className="flex items-center  justify-around gap-4 mb-3">
              <p className="bg-black  hover:bg-gray-800 px-4 py-2 rounded-full text-white">Total Quantity: <span className=" text-[#FFA500]">{ quantity }</span></p>
              <p className="bg-black  hover:bg-gray-800 px-4 py-2 rounded-full text-white">Total price: <span className="text-[#FFA500]">{price?.toFixed(2)}</span></p>
              <button
                onClick={handleCheckout}
                className=" bg-black text-[#FFA500] hover:bg-gray-800 px-4 py-2 rounded-full text-sm md:text-base  flex items-center gap-1"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carts;
