import { Link } from "react-router-dom";
import { FaRegHeart , FaShoppingCart} from "react-icons/fa";
import useGetMyCarts from "../../../Hooks/useGetMyCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export default function Navbar() {
  const axiosSecure = useAxiosSecure();
  let { myCarts, price,  refetch } = useGetMyCarts();
  const totalCart = myCarts?.length;

  if (myCarts?.length > 3) {
    myCarts = myCarts.slice(0, 3);
  }


  //  delte cart
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
        axiosSecure
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
    <div className="bg-gray-800 text-white">
      <ul className=" flex justify-center flex-wrap gap-5 py-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/aboutUs"}>AboutUs</Link>
        </li>
        <li>
          <Link to={"/faq"}>FAQ</Link>
        </li>
        <li>
          <Link to={"/carts"}>Carts</Link>
        </li>
 
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/wishlist"}>
            <div className="flex  items-center ">
              <div className="relative ">
                <div className="  absolute left-4 -top-2 ">
                  <p className="flex h-2 w-2 items-center justify-center bg-[#FFA500] p-3 rounded-full  text-sm text-white">
                    73
                  </p>
                </div>
                <FaRegHeart className="text-2xl " />
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to={"/carts"}>
            <div className="flex  items-center ">
              <div className="relative ">
                <div className="  absolute left-4 -top-2 ">
                  <p className="flex h-2 w-2 items-center justify-center bg-[#FFA500] p-3 rounded-full  text-sm text-white">
                    {totalCart}
                  </p>
                </div>
                <FaShoppingCart className="text-2xl " />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
