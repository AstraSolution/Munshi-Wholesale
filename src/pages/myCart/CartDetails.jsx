import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import { TrashIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

const CartDetails = ({ cart, refetch }) => {
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(cart?.quantity);
  const userEmail = localStorage.getItem("email");
  const axiosPublic = useAxiosPublic();

  //   handle increment product quantity
  const handleIncrement = async (id) => {
    if (quantity < cart?.stock_limit) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      const total_price = quantity * cart?.unit_price;

      if (userEmail) {
        const res = await axiosPublic.patch(`/myCarts/${id}`, {
          quantity,
          total_price,
        });
        if (res?.data) {
          refetch();
        }
      }
    } else {
      setError(`Opps this book limit is ${cart?.stock_limit}`);
    }
  };

  // handel decrement product quantity
  const handleDecrement = async (id) => {
    if (quantity > 1) {
      setError("");
      setQuantity((prevQuantity) => prevQuantity - 1);
      const total_price = quantity * cart?.unit_price;
      if (userEmail) {
        const res = await axiosPublic.patch(`/myCarts/${id}`, {
          quantity,
          total_price,
        });
        if (res.data) {
          refetch();
        }
      }
    }
  };

  //   delete a cart
  const handleDeleteCart = (id, title) => {
    Swal.fire({
      title: "Delete Book",
      text: `Are you sure you want to delete the book ${title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/myCarts/${id}`)
          .then((response) => {
            if (response.data) {
              Swal.fire(
                "Deleted!",
                `Your book "${title}" has been deleted.`,
                "success"
              );

              refetch();
            }
          })
          .catch((error) => {
            console.error("Error deleting Book:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the book.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div
      key={cart._id}
      className="pb-2 flex flex-col items-center md:flex-row gap-3 border-b my-5"
    >
      <Link to={`/allProducts/product/${cart?.product_id}`}>
        <img src={cart.product_image[0]} alt="" className="size-64" />
      </Link>

      <div className="space-y-2">
        <Link to={`/allProducts/product/${cart?.product_id}`}>
          <h2
            title={cart.title}
            className="text-xl lg:text-4xl font-semibold hover:cursor-pointer"
          >
            {cart.title.length < 28
              ? cart.title
              : cart.title.slice(0, 27) + ".."}
          </h2>
        </Link>

        <p>${cart.unit_price} per unit</p>
        <p>{cart?.dimensions}</p>
        <select>
          {cart.color.map((option, index) => (
            <option key={index} style={{ color: option.toLowerCase() }}>
              {option}
            </option>
          ))}
        </select>
        <div className="flex items-center">
          <button
            className="border py-1 px-3"
            onClick={() => handleDecrement(cart._id)}
          >
            -
          </button>
          <p className="border py-1 px-3">{cart.quantity}</p>
          <button
            className="border py-1 px-3"
            onClick={() => handleIncrement(cart._id)}
          >
            +
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <p>Total Quantity: {cart.quantity} pice</p>

        <div className="flex justify-between items-center my-2">
          <p>Total Price: ${(cart.unit_price * cart.quantity).toFixed(2)}</p>
          <button onClick={() => handleDeleteCart(cart?._id, cart?.title)} className="hover:text-red-500 rounded-lg transition-all duration-300">
            <span className="flex items-center gap-3">
              <TrashIcon className="size-5" />{" "}
              <span className="text-xl">Remove</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
