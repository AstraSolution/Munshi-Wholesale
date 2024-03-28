import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useMyCarts from "../../hooks/carts/useMyCarts";
import CartDetails from "./CartDetails";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";

const MyCart = () => {
  const { carts, totalPrice, isPending, refetch } = useMyCarts();
  const axiosPublic = useAxiosPublic();
  const email = localStorage.getItem("email");

  if (isPending) {
    return <div className=" text-center min-h-screen my-auto">Loading...</div>;
  }


  //   delete all cart
  const handleDeleteCart = () => {
    Swal.fire({
      title: "Delete Book",
      text: `Are you sure you want to delete all products`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/deleteCarts/${email}`)
          .then((response) => {
            if (response.data) {
              Swal.fire(
                "Deleted!",
                `Your products has been deleted.`,
                "success"
              );

              refetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the product.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      {carts?.length === 0 ? (
        <div className="text-center my-20">
          <p className=" my-10">Your product cart is empty.</p>
          <Link
            to={`/allProducts`}
            className="button-color px-4 py-2 rounded-full text-sm md:text-base  bg-yellow-300"
          >
            Add to Cart product
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-2 min-h-screen">
          <div className="my-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Your Shopping Cart
            </h1>
            <p className="font-light py-2">Home / Your Shopping Cart</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 mt-10">
            <div className="lg:w-2/3 px-3">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl lg:text-3xl font-bold">Products</h1>
                <button
                  onClick={handleDeleteCart}
                  className="hover:text-red-500 rounded-lg transition-all duration-300 mr-10"
                >
                  <span className="flex items-center gap-3">
                    <TrashIcon className="size-5" />{" "}
                    <span className="text-xl">Remove All</span>
                  </span>
                </button>
              </div>

              <div className="mt-5">
                {carts?.map((cart, i) => (
                  <CartDetails
                    key={i}
                    cart={cart}
                    refetch={refetch}
                  ></CartDetails>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 px-3">
              <h1 className="text-2xl lg:text-3xl font-bold">Order Summary</h1>

              <div className="mt-4">
                <div>
                  {carts?.map((cart, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 border-b my-3"
                    >
                      <div>
                        <h1 className="text-lg font-semibold">{index + 1}.</h1>
                      </div>
                      <div>
                        <Link>
                          <h1 className="text-lg font-semibold">
                            {cart?.title}
                          </h1>
                        </Link>
                        <p>Total Quantity: {cart?.quantity} pice</p>
                        <p>Total Price: ${cart?.total_price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <h1 className="text-2xl font-semibold cursor-pointer">
                  Subtotal: ${totalPrice?.toFixed(2)}
                </h1>
                <Link to="/checkout">
                  <button className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 shadow-lg hover:shadow-none rounded-lg text-xl font-bold transition-all duration-300 mt-8">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;